// hector exportar PDF  com.ecom.service.impl
package com.ecom.service.impl;

import com.ecom.model.ProductOrder;
import com.ecom.service.PdfExportService;
import com.itextpdf.text.*;
import com.itextpdf.text.pdf.PdfPCell;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfWriter;
import org.springframework.stereotype.Service;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.util.List;

@Service
public class PdfExportServiceImpl implements PdfExportService {

    @Override
    public ByteArrayInputStream exportOrdersToPdf(List<ProductOrder> orders) {
        Document document = new Document(PageSize.A4.rotate());
        ByteArrayOutputStream out = new ByteArrayOutputStream();
        
        try {
            PdfWriter writer = PdfWriter.getInstance(document, out);
            document.open();
            
            // Título
            Font titleFont = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 18, BaseColor.DARK_GRAY);
            Paragraph title = new Paragraph("REPORTE DE ÓRDENES", titleFont);
            title.setAlignment(Element.ALIGN_CENTER);
            title.setSpacingAfter(20f);
            document.add(title);
            
            // Tabla
            PdfPTable table = new PdfPTable(7);
            table.setWidthPercentage(100);
            table.setWidths(new float[]{1.5f, 3f, 2f, 2f, 2f, 2f, 2f});
            
            // Encabezados
            String[] headers = {"ID Orden", "Cliente", "Fecha", "Producto", "Cantidad", "Precio", "Estado"};
            for (String header : headers) {
                PdfPCell cell = new PdfPCell(new Phrase(header));
                cell.setBackgroundColor(new BaseColor(240, 240, 240));
                cell.setHorizontalAlignment(Element.ALIGN_CENTER);
                cell.setPadding(5);
                table.addCell(cell);
            }
            
            // Datos
            for (ProductOrder order : orders) {
                table.addCell(order.getOrderId());
                table.addCell(order.getOrderAddress().getFirstName() + " " + 
                              order.getOrderAddress().getLastName());
                table.addCell(order.getOrderDate().toString());
                table.addCell(order.getProduct().getTitle());
                table.addCell(String.valueOf(order.getQuantity()));
                table.addCell("$" + String.format("%.2f", order.getPrice()));
                table.addCell(order.getStatus());
            }
            
            document.add(table);
            document.close();
            writer.close();
            
        } catch (DocumentException e) {
            throw new RuntimeException("Error al generar PDF: " + e.getMessage(), e);
        }
        
        return new ByteArrayInputStream(out.toByteArray());
    }
}