package com.ecom.controller;

import com.ecom.model.ProductOrder;
import com.ecom.service.OrderService;
import com.ecom.service.PdfExportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import java.io.ByteArrayInputStream;
import java.util.List;

@Controller
public class PdfExportController {

    private final PdfExportService pdfExportService;
    private final OrderService orderService;

    @Autowired
    public PdfExportController(PdfExportService pdfExportService, OrderService orderService) {
        this.pdfExportService = pdfExportService;
        this.orderService = orderService;
    }

    @GetMapping("/admin/orders/export/pdf")
    public ResponseEntity<InputStreamResource> exportOrdersToPdf() {
        List<ProductOrder> orders = orderService.getAllOrders();
        
        ByteArrayInputStream pdfStream = pdfExportService.exportOrdersToPdf(orders);
        
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Disposition", "attachment; filename=reporte_ordenes.pdf");
        
        return ResponseEntity.ok()
                .headers(headers)
                .contentType(MediaType.APPLICATION_PDF)
                .body(new InputStreamResource(pdfStream));
    }
}