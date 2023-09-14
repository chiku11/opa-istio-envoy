function productpage(r) {
    let productpage = {
        message: 'this is an unrestricted page for public',
    };
    r.return(200, JSON.stringify(productpage));
}

function products(r) {
    let products = {
        items: [
            "apple",
            "google",]
    };
    r.return(200, JSON.stringify(products));
}
export default {
    productpage,
    products,
};