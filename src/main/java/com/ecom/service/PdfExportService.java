// Hector PDF
package com.ecom.service;

import com.ecom.model.ProductOrder;
import java.io.ByteArrayInputStream;
import java.util.List;

public interface PdfExportService {
    ByteArrayInputStream exportOrdersToPdf(List<ProductOrder> orders);
}