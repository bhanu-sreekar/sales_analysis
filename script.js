// Wait until page loads
document.addEventListener("DOMContentLoaded", function () {

    // Home page → View More
    const viewMoreBtn = document.getElementById("b1");
    if (viewMoreBtn) {
        viewMoreBtn.addEventListener("click", function () {
            window.location.href = "view.html";
        });
    }

    // View More → Plots
    const plotsBtn = document.getElementById("p1");
    if (plotsBtn) {
        plotsBtn.addEventListener("click", function () {
            window.location.href = "plots.html";
        });
    }

    // View More → Information
    const infoBtn = document.getElementById("i1");
    if (infoBtn) {
        infoBtn.addEventListener("click", function () {
            window.location.href = "info.html";
        });
    }

    // View More → Codes
    const codesBtn = document.getElementById("c1");
    if (codesBtn) {
        codesBtn.addEventListener("click", function () {
            window.location.href = "codes.html";
        });
    }

});
