const dictionary = { ar: { title: 
        "صندوق معلومات الأرض - 
        ناسا", desc: "مرحبًا بك في 
        المنصة التفاعلية لعرض 
        بيانات الأرض والملفات 
        ثلاثية الأبعاد.", 
        searchPlaceholder: "بحث 
        في البيانات...", 
        card3dTitle: "📁 ملفات 3D 
        النانو", card3dDesc: 
        "نموذج ثلاثي الأبعاد 
        تفاعلي.", cardVideoTitle: 
        "🎬 مقاطع الفيديو", 
        cardVideoDesc: "عروض 
        مرئية من مدار الأرض.", 
        cardAudioTitle: "🎵 
        الملفات الصوتية", 
        cardAudioDesc: "أصوات 
        تفاعلية ومؤثرات بيئية."
    },
    en: { title: "NASA Earth 
        Information Center", 
        desc: "Welcome to the 
        interactive platform for 
        Earth data and 3D 
        visualization.", 
        searchPlaceholder: 
        "Search data...", 
        card3dTitle: "📁 Nano 3D 
        Files", card3dDesc: 
        "Interactive 3D model.", 
        cardVideoTitle: "🎬 Video 
        Clips", cardVideoDesc: 
        "Visual displays from 
        Earth orbit.", 
        cardAudioTitle: "🎵 Audio 
        Files", cardAudioDesc: 
        "Interactive sounds and 
        environmental effects."
    },
    ja: { title: "NASA 
        地球情報センター", desc: 
        "地球データと3D視覚化のためのインタラクティブプラットフォームへようこそ。", 
        searchPlaceholder: 
        "データを検索...", 
        card3dTitle: "📁 ナノ 3D 
        ファイル", card3dDesc: 
        "インタラクティブな3Dモデル。", 
        cardVideoTitle: "🎬 
        ビデオクリップ", 
        cardVideoDesc: 
        "地球軌道からのビジュアル表示。", 
        cardAudioTitle: "🎵 
        オーディオファイル", 
        cardAudioDesc: 
        "インタラクティブなサウンドと環境効果。"
    }
};
function applyLanguage(lang) { 
    const currentLang = 
    dictionary[lang] ? lang : 
    'ar'; const data = 
    dictionary[currentLang]; 
    const dir = currentLang === 
    'ar' ? 'rtl' : 'ltr';
    
    document.documentElement.lang 
    = currentLang; 
    document.documentElement.dir 
    = dir; 
    document.getElementById('uiTitle').textContent 
    = data.title; 
    document.getElementById('uiDesc').textContent 
    = data.desc; 
    document.getElementById('searchInput').placeholder 
    = data.searchPlaceholder;
    
    document.getElementById('cardTitle3d').textContent 
    = data.card3dTitle; 
    document.getElementById('cardDesc3d').textContent 
    = data.card3dDesc; 
    document.getElementById('cardTitleVideo').textContent 
    = data.cardTitleVideo; 
    document.getElementById('cardDescVideo').textContent 
    = data.cardVideoDesc; 
    document.getElementById('cardTitleAudio').textContent 
    = data.cardAudioTitle; 
    document.getElementById('cardDescAudio').textContent 
    = data.cardAudioDesc; 
    localStorage.setItem('preferred_lang', 
    currentLang);
}
document.getElementById('langSelect').addEventListener('change', 
(e) => {
    applyLanguage(e.target.value);
});
document.addEventListener('DOMContentLoaded', 
() => {
    const savedLang = 
    localStorage.getItem('preferred_lang') 
    || 'ar';
    document.getElementById('langSelect').value 
    = savedLang; 
    applyLanguage(savedLang);
});
const container = 
document.getElementById('canvas-container'); 
const scene = new THREE.Scene(); 
const camera = new 
THREE.PerspectiveCamera(75, 
container.clientWidth / 
container.clientHeight, 0.1, 
1000); const renderer = new 
THREE.WebGLRenderer({ antialias: 
true, alpha: true }); 
renderer.setSize(container.clientWidth, 
container.clientHeight); 
container.appendChild(renderer.domElement); 
const geometry = new 
THREE.SphereGeometry(1.5, 32, 
32); const material = new 
THREE.MeshBasicMaterial({ color: 
0x00ffcc, wireframe: true }); 
const sphere = new 
THREE.Mesh(geometry, material); 
scene.add(sphere); 
camera.position.z = 5; function 
animate() {
    requestAnimationFrame(animate); 
    sphere.rotation.y += 0.01; 
    renderer.render(scene, 
    camera);
}
animate();
