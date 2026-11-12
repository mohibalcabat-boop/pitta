document.addEventListener("DOMContentLoaded", 
() => {
    // 1. Sidebar Toggle Controls
    const menuBtn = 
    document.getElementById("menuBtn"); 
    const closeSidebar = 
    document.getElementById("closeSidebar"); 
    const sidebar = 
    document.getElementById("sidebar"); 
    const overlay = 
    document.getElementById("overlay"); 
    const sideLinks = 
    document.querySelectorAll(".side-link"); 
    function openMenu() {
        sidebar.classList.add("open"); 
        overlay.classList.add("active");
    }
    function closeMenu() { 
        sidebar.classList.remove("open"); 
        overlay.classList.remove("active");
    }
    menuBtn.addEventListener("click", 
    openMenu); 
    closeSidebar.addEventListener("click", 
    closeMenu); 
    overlay.addEventListener("click", 
    closeMenu);
    // Smooth scroll to target 
    // bundle when clicked in 
    // sidebar
    sideLinks.forEach(link => { 
        link.addEventListener("click", 
        (e) => {
            e.preventDefault(); 
            const targetId = 
            link.getAttribute("href").substring(1); 
            const targetElement = 
            document.getElementById(targetId); 
            if (targetElement) {
                targetElement.scrollIntoView({ 
                behavior: 
                "smooth", block: 
                "start" });
            }
            closeMenu();
        });
    });
    // 2. 3D Model Uploader 
    // Handler
    const modelFileInput = 
    document.getElementById("modelFileInput"); 
    const fileStatus = 
    document.getElementById("fileStatus"); 
    const modelMessage = 
    document.getElementById("modelMessage"); 
    modelFileInput.addEventListener("change", 
    (e) => {
        const file = 
        e.target.files[0]; if 
        (file) {
            fileStatus.textContent 
            = `Loaded: 
            ${file.name} 
            (${(file.size / 
            1024).toFixed(1)} 
            KB)`; 
            modelMessage.innerHTML 
            = `<strong>3D Asset 
            Attached 
            successfully:</strong> 
            ${file.name}<br>Rendered 
            inside the 
            interactive 3D Earth 
            Environment window.`; 
            closeMenu();
        }
    });
    // 3. 10 Comprehensive 
    // Bundles with Exact 
    // Infographics & 70 Topics 
    // (Plain Text Headings)
    const scienceBundles = [ { 
            id: "bundle-1", 
            title: "Bundle 01: 
            Climate Dynamics & 
            Solar-Earth 
            Interaction", 
            description: "Earth's 
            climate system 
            functions as an 
            intricate 
            thermodynamic engine 
            heavily driven by 
            incoming solar 
            radiation, axial tilt 
            variations, and 
            complex orbital 
            mechanics. The 
            intricate interplay 
            between the Sun, 
            Earth, and Moon 
            dictates seasonal 
            fluctuations, diurnal 
            day-night cycles, and 
            the precise angles of 
            direct versus 
            indirect solar energy 
            absorption across 
            equatorial and polar 
            latitudes. Utilizing 
            multi-decadal 
            satellite observation 
            records from NASA's 
            advanced orbital 
            instruments, 
            researchers 
            systematically track 
            planetary albedo 
            shifts, greenhouse 
            gas radiative forcing 
            feedbacks, and 
            thermal equilibrium 
            dynamics across both 
            land and oceanic 
            surfaces. 
            Understanding these 
            fundamental 
            solar-terrestrial 
            mechanics allows 
            climatologists to 
            project regional 
            weather variations, 
            long-term atmospheric 
            heating trends, and 
            energy balance 
            alterations with 
            exceptional 
            mathematical 
            precision.", image: 
            "images/125306.jpg", 
            fallbackImage: 
            "images/125304.jpg", 
            imageCaption: 
            "Infographic: How 
            Sun, Earth and Moon 
            Interact, Day/Night & 
            Lunar Phases", 
            topics: ["1. 
            Planetary Albedo 
            Shifts", "2. 
            Radiative Forcing 
            Metrics", "3. 
            Tropospheric Warming 
            Trends", "4. 
            Greenhouse Gas 
            Spectroscopy", "5. 
            Cloud Feedback 
            Mechanisms", "6. 
            Urban Heat Island 
            Telemetry", "7. 
            Paleoclimate Ice Core 
            Records"]
        },
        { id: "bundle-2", title: 
            "Bundle 02: 
            Atmospheric 
            Circulation & 
            Stratospheric 
            Layers", description: 
            "The Earth's 
            atmosphere is 
            structurally 
            stratified into 
            distinct thermal, 
            chemical, and 
            barometric layers 
            that protect 
            biological organisms 
            from lethal cosmic 
            radiation while 
            regulating global 
            weather phenomena. 
            Large-scale 
            atmospheric 
            circulation 
            cells—including 
            Hadley cells, Ferrel 
            cells, and 
            high-latitude polar 
            easterlies—redistribute 
            colossal amounts of 
            thermal energy from 
            the scorching 
            equatorial regions 
            toward the freezing 
            poles. Continuous 
            orbital monitoring 
            via advanced 
            meteorological 
            satellites reveals 
            critical pressure 
            gradients, jet stream 
            meandering patterns, 
            and aerosol transport 
            dynamics that govern 
            regional 
            precipitation 
            distribution, severe 
            storm tracks, and 
            tropospheric 
            stability across both 
            hemispheres 
            throughout changing 
            seasons.", image: 
            "images/125303.jpg", 
            fallbackImage: 
            "images/125312.jpg", 
            imageCaption: 
            "Infographic: Global 
            Atmospheric 
            Circulation Cells & 
            Polar Front Jet 
            Streams", topics: 
            ["8. Polar Ozone 
            Depletion", "9. 
            Aerosol Optical 
            Depth", "10. 
            Stratospheric Water 
            Vapor", "11. Volcanic 
            Plume Dispersion", 
            "12. Tropospheric 
            Nitrogen Dioxide", 
            "13. Atmospheric 
            Boundary Layer", "14. 
            Transboundary Dust 
            Transport"]
        },
        { id: "bundle-3",
            title: "Bundle 03: Physical Oceanography & El Niño Osc
