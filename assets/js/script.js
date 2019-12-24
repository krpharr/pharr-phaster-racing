// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.sidenav');
//     var instances = M.Sidenav.init(elems, options);
// });

// // Or with jQuery
const sponsorLogoArray = [
    "carbotech.png",
    "hoosier.png",
    "jri.png",
    "nismo.png",
    "scca.png",
    "wilwood.png",
    "wiseco.png"
];

buildSponsorLogoContainer();

$(document).ready(function() {
    $('.sidenav').sidenav();
});



function buildSponsorLogoContainer() {
    $("#sponsors-logos-container-ID").empty();
    sponsorLogoArray.forEach(logo => {
        let div = $("<div class='col'>");
        div.attr("style", "margin: 4px;");
        let img = $("<img style='max-width: 80px;'>").attr("src", `assets/images/${logo}`);
        div.append(img);
        $("#sponsors-logos-container-ID").append(div);
    });
};