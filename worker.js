const CONFIG = {
  storeName: "William's Catalog",
  tagline: "Factory Direct • Product Catalog",
  whatsapp: "8613968813193", // digits only, e.g. 14155551234
  currencySymbol: "",
  showPrices: false
};

// Replace the sample products below with your own legal/OEM/unbranded products.
// Each product can have multiple image URLs.
const PRODUCTS = [
  {
    sku: "BAG-001",
    name: "Classic Shoulder Bag",
    category: "Bags",
    brand: "Brand A",
    subcategory: "Shoulder Bags",
    description: "Sample product description. Replace with your own product information.",
    images: [
      "https://placehold.co/900x1100?text=BAG-001+1",
      "https://placehold.co/900x1100?text=BAG-001+2",
      "https://placehold.co/900x1100?text=BAG-001+3"
    ]
  },
  {
    sku: "BAG-002",
    name: "Mini Handbag",
    category: "Bags",
    brand: "Brand B",
    subcategory: "Handbags",
    description: "Sample product description.",
    images: [
      "https://placehold.co/900x1100?text=BAG-002+1",
      "https://placehold.co/900x1100?text=BAG-002+2"
    ]
  },
  {
    sku: "SHOE-001",
    name: "Classic Low-Top Sneaker",
    category: "Shoes",
    brand: "Brand A",
    subcategory: "Sneakers",
    description: "Sample product description.",
    images: [
      "https://placehold.co/900x900?text=SHOE-001+1",
      "https://placehold.co/900x900?text=SHOE-001+2"
    ]
  },
  {
    sku: "WATCH-001",
    name: "Minimal Steel Watch",
    category: "Watches",
    brand: "Brand C",
    subcategory: "Watches",
    description: "Sample product description.",
    images: [
      "https://placehold.co/900x900?text=WATCH-001+1",
      "https://placehold.co/900x900?text=WATCH-001+2"
    ]
  },
  {
    sku: "JEW-001",
    name: "Minimal Pendant Necklace",
    category: "Jewelry",
    brand: "Brand B",
    subcategory: "Necklaces",
    description: "Sample product description.",
    images: [
      "https://placehold.co/900x900?text=JEW-001+1",
      "https://placehold.co/900x900?text=JEW-001+2"
    ]
  }
];

function esc(value = "") {
  return String(value).replace(/[&<>"']/g, c => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
  }[c]));
}

function page() {
  const initialProducts = JSON.stringify(PRODUCTS).replace(/</g, "\\u003c");
  const cfg = JSON.stringify(CONFIG).replace(/</g, "\\u003c");

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="description" content="${esc(CONFIG.tagline)}">
<title>${esc(CONFIG.storeName)}</title>
<style>
:root{
  --bg:#f7f7f5;--card:#fff;--text:#111;--muted:#777;--line:#e8e8e8;
  --accent:#111;--radius:14px;--max:1440px;
}
*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{margin:0;background:var(--bg);color:var(--text);font-family:Inter,Arial,Helvetica,sans-serif}
button,input,select{font:inherit}
button{cursor:pointer}
a{color:inherit;text-decoration:none}
.header{position:sticky;top:0;z-index:20;background:rgba(255,255,255,.94);backdrop-filter:blur(12px);border-bottom:1px solid var(--line)}
.header-inner{max-width:var(--max);margin:auto;min-height:72px;padding:0 22px;display:flex;align-items:center;gap:22px}
.logo{font-weight:800;letter-spacing:.04em;white-space:nowrap}
.tagline{font-size:12px;color:var(--muted);flex:1}
.nav{display:flex;gap:6px;align-items:center}
.nav button{border:0;background:transparent;padding:10px 12px;border-radius:10px}
.nav button:hover{background:#f1f1ef}
.wa{background:#111!important;color:#fff!important;border-radius:999px!important;padding:10px 16px!important}
.hero{max-width:var(--max);margin:0 auto;padding:58px 22px 28px}
.hero h1{font-size:clamp(34px,5vw,64px);line-height:1;margin:0 0 14px;letter-spacing:-.04em}
.hero p{margin:0;color:var(--muted);max-width:680px;font-size:16px}
.quick{max-width:var(--max);margin:0 auto;padding:0 22px 26px;display:flex;gap:10px;overflow:auto}
.chip{border:1px solid var(--line);background:#fff;padding:10px 15px;border-radius:999px;white-space:nowrap}
.chip.active,.chip:hover{background:#111;color:#fff;border-color:#111}
.section{max-width:var(--max);margin:auto;padding:28px 22px}
.section-title{display:flex;justify-content:space-between;align-items:end;gap:20px;margin-bottom:14px}
.section-title h2{margin:0;font-size:24px}
.section-title span{color:var(--muted);font-size:13px}
.controls{display:grid;grid-template-columns:2fr 1fr 1fr auto;gap:10px;margin-bottom:20px}
.control{height:46px;border:1px solid var(--line);background:#fff;border-radius:10px;padding:0 13px;outline:none}
.control:focus{border-color:#aaa}
.clear{height:46px;border:1px solid #111;background:#111;color:#fff;border-radius:10px;padding:0 18px}
.grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px}
.card{background:var(--card);border:1px solid var(--line);border-radius:var(--radius);overflow:hidden;transition:.18s transform,.18s box-shadow}
.card:hover{transform:translateY(-2px);box-shadow:0 10px 30px rgba(0,0,0,.06)}
.card-img{aspect-ratio:1/1.18;background:#eee;overflow:hidden}
.card-img img{width:100%;height:100%;display:block;object-fit:cover}
.card-body{padding:13px 14px 15px}
.badges{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:8px}
.badge{font-size:10px;text-transform:uppercase;letter-spacing:.08em;color:#666;background:#f1f1ef;padding:5px 7px;border-radius:999px}
.card h3{font-size:15px;margin:0 0 5px}
.sku{font-size:12px;color:var(--muted)}
.card button{margin-top:12px;width:100%;height:38px;border:1px solid #ddd;background:#fff;border-radius:9px}
.card button:hover{border-color:#111}
.pager{display:flex;justify-content:center;align-items:center;gap:12px;padding:26px 0 10px}
.pager button{border:1px solid var(--line);background:#fff;border-radius:9px;padding:9px 15px}
.pager button:disabled{opacity:.4;cursor:not-allowed}
.empty{text-align:center;padding:70px 20px;color:var(--muted)}
.footer{margin-top:50px;border-top:1px solid var(--line);background:#fff}
.footer-inner{max-width:var(--max);margin:auto;padding:28px 22px;display:flex;justify-content:space-between;gap:20px;color:var(--muted);font-size:13px}
.modal{position:fixed;inset:0;background:rgba(0,0,0,.72);z-index:50;display:none;align-items:center;justify-content:center;padding:18px}
.modal.open{display:flex}
.modal-box{background:#fff;border-radius:18px;max-width:1100px;width:100%;max-height:94vh;overflow:auto;position:relative}
.close{position:absolute;right:14px;top:14px;width:40px;height:40px;border:0;border-radius:50%;background:#fff;box-shadow:0 3px 18px rgba(0,0,0,.14);z-index:2;font-size:20px}
.modal-main{display:grid;grid-template-columns:1.1fr .9fr;min-height:560px}
.gallery{background:#f4f4f2;padding:20px;display:flex;flex-direction:column;gap:10px}
.main-photo{flex:1;min-height:420px;display:flex;align-items:center;justify-content:center}
.main-photo img{max-width:100%;max-height:65vh;object-fit:contain;border-radius:10px}
.thumbs{display:flex;gap:8px;overflow:auto}
.thumbs img{width:72px;height:72px;object-fit:cover;border-radius:8px;border:2px solid transparent;cursor:pointer}
.thumbs img.active{border-color:#111}
.details{padding:46px 38px}
.details .badge{display:inline-block}
.details h2{font-size:32px;line-height:1.1;margin:12px 0 8px}
.details .sku-big{color:var(--muted);font-size:13px;margin-bottom:20px}
.details p{color:#555;line-height:1.7}
.detail-meta{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:24px 0}
.meta{border:1px solid var(--line);border-radius:10px;padding:12px}
.meta small{display:block;color:#999;margin-bottom:5px}
.copy,.contact{width:100%;height:46px;border-radius:10px;margin-top:10px}
.copy{border:1px solid #ddd;background:#fff}
.contact{border:0;background:#111;color:#fff}
.toast{position:fixed;left:50%;bottom:25px;transform:translateX(-50%);background:#111;color:#fff;padding:11px 16px;border-radius:999px;z-index:100;display:none;font-size:13px}
@media(max-width:1050px){.grid{grid-template-columns:repeat(3,minmax(0,1fr))}}
@media(max-width:780px){
  .header-inner{min-height:62px;padding:0 14px;gap:10px}
  .tagline{display:none}.nav button:not(.wa){display:none}.wa{font-size:12px;padding:9px 12px!important}
  .hero{padding:38px 14px 22px}.section{padding:22px 14px}.quick{padding:0 14px 18px}
  .controls{grid-template-columns:1fr 1fr}.controls .search{grid-column:1/-1}.clear{grid-column:1/-1}
  .grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}
  .card-body{padding:10px}.card h3{font-size:13px}.badge{font-size:9px}
  .modal{padding:0}.modal-box{border-radius:0;max-height:100vh;height:100vh}
  .modal-main{grid-template-columns:1fr;display:block}
  .gallery{padding:12px}.main-photo{min-height:55vh}.main-photo img{max-height:58vh}
  .details{padding:24px 18px 35px}.details h2{font-size:25px}
  .footer-inner{display:block;padding:22px 14px}
}
</style>
</head>
<body>
<header class="header">
  <div class="header-inner">
    <div class="logo" id="logo"></div>
    <div class="tagline" id="tagline"></div>
    <nav class="nav">
      <button onclick="goHome()">Home</button>
      <button onclick="scrollToProducts()">Products</button>
      <button class="wa" id="headerWa">WhatsApp</button>
    </nav>
  </div>
</header>

<main>
  <section class="hero">
    <h1 id="heroTitle"></h1>
    <p id="heroTagline"></p>
  </section>

  <div class="quick" id="categoryChips"></div>

  <section class="section" id="products">
    <div class="section-title">
      <h2>Product Catalog</h2>
      <span id="resultCount"></span>
    </div>
    <div class="controls">
      <input id="search" class="control search" placeholder="Search product number or keyword">
      <select id="category" class="control"></select>
      <select id="brand" class="control"></select>
      <button id="clear" class="clear">Reset</button>
    </div>
    <div id="grid" class="grid"></div>
    <div class="pager">
      <button id="prev">← Previous</button>
      <span id="pageInfo"></span>
      <button id="next">Next →</button>
    </div>
  </section>
</main>

<footer class="footer">
  <div class="footer-inner">
    <div><strong id="footerName"></strong><br>Product catalog • Contact for details</div>
    <div>WhatsApp: <span id="footerPhone"></span></div>
  </div>
</footer>

<div id="modal" class="modal" aria-hidden="true">
  <div class="modal-box">
    <button class="close" onclick="closeModal()">×</button>
    <div class="modal-main">
      <div class="gallery">
        <div class="main-photo"><img id="mainPhoto" alt=""></div>
        <div class="thumbs" id="thumbs"></div>
      </div>
      <div class="details">
        <span class="badge" id="detailCategory"></span>
        <h2 id="detailName"></h2>
        <div class="sku-big">Product No. <strong id="detailSku"></strong></div>
        <div class="detail-meta">
          <div class="meta"><small>Brand</small><strong id="detailBrand"></strong></div>
          <div class="meta"><small>Category</small><strong id="detailSubcategory"></strong></div>
        </div>
        <p id="detailDescription"></p>
        <button class="copy" onclick="copySku()">Copy Product Number</button>
        <button class="contact" id="detailWa">Contact on WhatsApp</button>
      </div>
    </div>
  </div>
</div>
<div id="toast" class="toast"></div>

<script>
const CONFIG = ${cfg};
const PRODUCTS = ${initialProducts};

let state = { page: 1, perPage: 24, search: "", category: "All", brand: "All" };
let currentProduct = null;
let currentImageIndex = 0;

const $ = s => document.querySelector(s);

function whatsappUrl(sku){
  const text = encodeURIComponent("Hi, I'm interested in product " + sku + ". Please send me details.");
  return "https://wa.me/" + CONFIG.whatsapp + "?text=" + text;
}

function unique(key){
  return [...new Set(PRODUCTS.map(p => p[key]).filter(Boolean))].sort();
}

function init(){
  $("#logo").textContent = CONFIG.storeName;
  $("#footerName").textContent = CONFIG.storeName;
  $("#tagline").textContent = CONFIG.tagline;
  $("#heroTitle").textContent = CONFIG.storeName;
  $("#heroTagline").textContent = CONFIG.tagline;
  $("#footerPhone").textContent = "+" + CONFIG.whatsapp;

  $("#headerWa").onclick = () => window.open(whatsappUrl("general inquiry"), "_blank");

  const cats = ["All", ...unique("category")];
  const brands = ["All", ...unique("brand")];

  $("#category").innerHTML = cats.map(v => '<option value="'+esc(v)+'">'+esc(v === "All" ? "All categories" : v)+'</option>').join("");
  $("#brand").innerHTML = brands.map(v => '<option value="'+esc(v)+'">'+esc(v === "All" ? "All brands" : v)+'</option>').join("");

  $("#categoryChips").innerHTML = cats.map(v =>
    '<button class="chip '+(v==="All"?"active":"")+'" data-cat="'+esc(v)+'">'+esc(v==="All"?"All Products":v)+'</button>'
  ).join("");

  document.querySelectorAll(".chip").forEach(btn => btn.onclick = () => {
    state.category = btn.dataset.cat;
    state.page = 1;
    $("#category").value = state.category;
    document.querySelectorAll(".chip").forEach(x => x.classList.remove("active"));
    btn.classList.add("active");
    render();
    scrollToProducts();
  });

  $("#search").addEventListener("input", e => { state.search=e.target.value.trim().toLowerCase(); state.page=1; render(); });
  $("#category").addEventListener("change", e => { state.category=e.target.value; state.page=1; syncChips(); render(); });
  $("#brand").addEventListener("change", e => { state.brand=e.target.value; state.page=1; render(); });
  $("#clear").onclick = () => {
    state={page:1,perPage:24,search:"",category:"All",brand:"All"};
    $("#search").value=""; $("#category").value="All"; $("#brand").value="All"; syncChips(); render();
  };
  $("#prev").onclick=()=>{if(state.page>1){state.page--;render();scrollToProducts();}};
  $("#next").onclick=()=>{const pages=pageCount();if(state.page<pages){state.page++;render();scrollToProducts();}};
  render();
}

function syncChips(){
  document.querySelectorAll(".chip").forEach(x=>x.classList.toggle("active",x.dataset.cat===state.category));
}

function filtered(){
  return PRODUCTS.filter(p => {
    const hay = [p.sku,p.name,p.category,p.brand,p.subcategory,p.description].join(" ").toLowerCase();
    return (state.category==="All" || p.category===state.category)
      && (state.brand==="All" || p.brand===state.brand)
      && (!state.search || hay.includes(state.search));
  });
}

function pageCount(){ return Math.max(1, Math.ceil(filtered().length/state.perPage)); }

function render(){
  const all=filtered(), pages=pageCount();
  if(state.page>pages) state.page=pages;
  const start=(state.page-1)*state.perPage;
  const items=all.slice(start,start+state.perPage);
  $("#resultCount").textContent = all.length + " product" + (all.length===1?"":"s");

  $("#grid").innerHTML = items.length ? items.map((p,i)=>`
    <article class="card">
      <div class="card-img">
        <img loading="lazy" src="${esc(p.images?.[0]||"https://placehold.co/900x1100?text=No+Image")}" alt="${esc(p.name)}">
      </div>
      <div class="card-body">
        <div class="badges"><span class="badge">${esc(p.category)}</span><span class="badge">${esc(p.brand)}</span></div>
        <h3>${esc(p.name)}</h3>
        <div class="sku">${esc(p.sku)}</div>
        <button onclick="openProduct('${esc(p.sku)}')">View Product</button>
      </div>
    </article>
  `).join("") : '<div class="empty" style="grid-column:1/-1">No products found. Try another keyword or filter.</div>';

  $("#pageInfo").textContent = "Page " + state.page + " / " + pages;
  $("#prev").disabled = state.page<=1;
  $("#next").disabled = state.page>=pages;
}

function openProduct(sku){
  const p=PRODUCTS.find(x=>x.sku===sku); if(!p) return;
  currentProduct=p; currentImageIndex=0;
  $("#detailCategory").textContent=p.category;
  $("#detailName").textContent=p.name;
  $("#detailSku").textContent=p.sku;
  $("#detailBrand").textContent=p.brand || "-";
  $("#detailSubcategory").textContent=p.subcategory || "-";
  $("#detailDescription").textContent=p.description || "";
  $("#detailWa").onclick=()=>window.open(whatsappUrl(p.sku),"_blank");
  renderGallery();
  $("#modal").classList.add("open");
  $("#modal").setAttribute("aria-hidden","false");
  document.body.style.overflow="hidden";
}

function renderGallery(){
  const imgs=currentProduct?.images||[];
  $("#mainPhoto").src=imgs[currentImageIndex]||"https://placehold.co/900x1100?text=No+Image";
  $("#mainPhoto").alt=currentProduct?.name||"";
  $("#thumbs").innerHTML=imgs.map((src,i)=>`<img class="${i===currentImageIndex?"active":""}" src="${esc(src)}" onclick="setImage(${i})" alt="">`).join("");
}
function setImage(i){currentImageIndex=i;renderGallery();}
function closeModal(){ $("#modal").classList.remove("open"); $("#modal").setAttribute("aria-hidden","true"); document.body.style.overflow=""; }
$("#modal").addEventListener("click",e=>{if(e.target.id==="modal")closeModal();});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal();});
function copySku(){ if(!currentProduct)return; navigator.clipboard?.writeText(currentProduct.sku); showToast("Product number copied"); }
function showToast(t){ const el=$("#toast");el.textContent=t;el.style.display="block";setTimeout(()=>el.style.display="none",1500); }
function esc(v){return String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function scrollToProducts(){document.querySelector("#products").scrollIntoView({behavior:"smooth"});}
function goHome(){window.scrollTo({top:0,behavior:"smooth"});}
init();
</script>
</body>
</html>`;
}

export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (request.method !== "GET" && request.method !== "HEAD") {
      return new Response("Method Not Allowed", { status: 405 });
    }
    return new Response(page(), {
      headers: {
        "content-type": "text/html; charset=UTF-8",
        "cache-control": "public, max-age=60"
      }
    });
  }
};
