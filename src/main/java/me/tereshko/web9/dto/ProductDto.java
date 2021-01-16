package me.tereshko.web9.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import me.tereshko.web9.models.Product;

@Data
@NoArgsConstructor
public class ProductDto extends Product{
    private Long id;
    private String name;
    private double price;

    public ProductDto(Product product) {
        this.id = product.getId();
        this.name = product.getName();
        this.price = product.getPrice();
    }
}
