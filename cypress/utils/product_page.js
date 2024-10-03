
export function getProductPrice(ProductName) {
    cy.xpath(`//div[text]()="${ProductName}"]/following::div[@class="inventory_item_price"][1]`).then(function ($elem) {

        return $elem.text()

    })
}