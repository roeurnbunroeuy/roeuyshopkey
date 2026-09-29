/** ROEUYStoreDB: swap these methods for fetch/API calls when adding a backend. */
const prefix = 'roeuy.v1.';
const defaults = {
  language: 'kh', theme: 'default', session: null,
  products: [
    {id:'RS-001',nameKh:'ក្តារចុច Aurora 68',nameEn:'Aurora 68 Keyboard',descriptionKh:'ក្តារចុចមេកានិកសំឡេងទន់ ជាមួយពន្លឺពណ៌ស្រស់។',descriptionEn:'A compact mechanical keyboard with a soft feel and radiant lighting.',price:69,oldPrice:89,discount:22,category:'keyboard',image:'assets/images/keyboard.svg',stock:12,visible:true,specificationsKh:'68 គ្រាប់ចុច · USB-C · ភ្លើង RGB',specificationsEn:'68 keys · USB-C · RGB lighting'},
    {id:'RS-002',nameKh:'ដៃទ្រទូរស័ព្ទ Orbit',nameEn:'Orbit Phone Arm',descriptionKh:'ដៃទ្រទូរស័ព្ទបត់បែនបាន សម្រាប់ការងារ និងការផ្សាយផ្ទាល់។',descriptionEn:'A flexible desk-mounted phone arm for work and streaming.',price:29,oldPrice:39,discount:26,category:'phone-arm',image:'assets/images/phone-arm.svg',stock:8,visible:true,specificationsKh:'បង្វិល 360° · ដែកអាលុយមីញ៉ូម · ងាយតម្លើង',specificationsEn:'360° rotation · Aluminum alloy · Easy setup'},
    {id:'RS-003',nameKh:'អាដាប់ទ័រ USB-C Prism',nameEn:'Prism USB-C Hub',descriptionKh:'ពង្រីកការតភ្ជាប់របស់អ្នកក្នុងទម្រង់តូចស្រស់ស្អាត។',descriptionEn:'Expand your connections with one beautifully compact hub.',price:35,oldPrice:45,discount:22,category:'usb-adapter',image:'assets/images/usb-hub.svg',stock:16,visible:true,specificationsKh:'USB-C · HDMI · USB 3.0 · SD Card',specificationsEn:'USB-C · HDMI · USB 3.0 · SD Card'},
    {id:'RS-004',nameKh:'Mouse Pad Bloom',nameEn:'Bloom Desk Mat',descriptionKh:'បន្ថែមភាពទន់ភ្លន់ និងពណ៌ដល់តុធ្វើការរបស់អ្នក។',descriptionEn:'Add a soft landing and a pop of color to your workspace.',price:22,oldPrice:29,discount:24,category:'accessories',image:'assets/images/desk-mat.svg',stock:23,visible:true,specificationsKh:'ផ្ទៃទន់ · មិនរអិល · 80 × 30 សម',specificationsEn:'Soft surface · Non-slip base · 80 × 30 cm'},
    {id:'RS-005',nameKh:'ចង្កៀងតុ Halo',nameEn:'Halo Desk Light',descriptionKh:'ពន្លឺកក់ក្តៅបង្កើតបរិយាកាសស្ងប់ស្ងាត់សម្រាប់ការងារ។',descriptionEn:'Warm ambient light for your most focused moments.',price:48,oldPrice:59,discount:19,category:'other',image:'assets/images/desk-light.svg',stock:5,visible:true,specificationsKh:'3 របៀបពន្លឺ · USB-C · ប៉ះដើម្បីបញ្ជា',specificationsEn:'3 light modes · USB-C · Touch control'},
    {id:'RS-006',nameKh:'កាសស្តាប់ត្រចៀក Echo',nameEn:'Echo Headphones',descriptionKh:'សម្លេងច្បាស់ និងការរចនាស្រួលពាក់ពេញមួយថ្ងៃ។',descriptionEn:'Clear, immersive sound with all-day comfort.',price:54,oldPrice:72,discount:25,category:'accessories',image:'assets/images/headphones.svg',stock:0,visible:true,specificationsKh:'ប៊្លូធូស · ថ្ម 20 ម៉ោង · USB-C',specificationsEn:'Bluetooth · 20-hour battery · USB-C'}
  ],
  categories: [
    {id:'keyboard',kh:'ក្តារចុច',en:'Keyboard'}, {id:'phone-arm',kh:'ដៃទ្រទូរស័ព្ទ',en:'Phone Arm'},
    {id:'usb-adapter',kh:'អាដាប់ទ័រ USB',en:'USB Adapter'}, {id:'accessories',kh:'គ្រឿងបន្លាស់',en:'Accessories'}, {id:'other',kh:'ផលិតផលផ្សេងៗ',en:'Other Products'}
  ],
  settings: {
    name:'ROEUY STORE',logo:'',favicon:'',primary:'#ed8fb2',secondary:'#9bdbaf',background:'#f8f8f3',textColor:'#17251f',buttonStyle:'pill',radius:24,animations:true,
    hero:{titleKh:'បង្កើនសមត្ថភាពតុរបស់អ្នក។ បង្ហាញស្ទីលរបស់អ្នក។',titleEn:'Upgrade Your Setup. Upgrade Your Style.',subtitleKh:'គ្រឿងបន្លាស់ពិសេស សម្រាប់ជីវិតឌីជីថលរបស់អ្នក។',subtitleEn:'Premium accessories for your digital lifestyle.',buttonKh:'ទិញឥឡូវនេះ',buttonEn:'Shop Now',buttonUrl:'shop.html',image:'',overlay:0.35,animation:true},
    wallpaper:{image:'',opacity:0.9,position:'center center',size:'cover'},
    about:{eyebrowKh:'រឿងរ៉ាវរបស់យើង',eyebrowEn:'OUR STORY',titleKh:'របស់តូចៗ ដែលផ្លាស់ប្តូរថ្ងៃរបស់អ្នក។',titleEn:'Little details. Better every day.',introKh:'ROEUY STORE ជ្រើសរើសគ្រឿងបន្លាស់ឌីជីថល ដែលស្រស់ស្អាត និងមានប្រយោជន៍សម្រាប់រាល់ថ្ងៃ។',introEn:'ROEUY STORE curates thoughtful digital accessories that make your everyday setup feel a little more you.',sellKh:'ពីក្តារចុច ដល់គ្រឿងបន្លាស់តុធ្វើការ យើងនាំមកនូវផលិតផលដែលមានស្ទីល និងប្រើប្រាស់បានពិតប្រាកដ។',sellEn:'From keyboards to desk essentials, we bring together pieces that look good and work beautifully.',whyKh:'រចនាស្អាត គុណភាពយកចិត្តទុកដាក់ និងការឆ្លើយតបរហ័ស។',whyEn:'Thoughtful design, considered quality, and friendly, fast responses.'},
    contact:{telegram:'nhngegbunroeuy',facebook:'https://facebook.com/',email:'hello@roeuy.store',phone:'+855 12 345 678',instagram:'https://instagram.com/'},
    footer:{descriptionKh:'គ្រឿងបន្លាស់តូចៗ សម្រាប់គំនិតធំៗ។',descriptionEn:'Little upgrades for big ideas.',quickKh:'តំណរហ័ស',quickEn:'Quick Links',supportKh:'ជំនួយអតិថិជន',supportEn:'Customer Support',copyright:'© 2026 ROEUY STORE',ornamentKh:'បង្កើតសម្រាប់រាល់ថ្ងៃ',ornamentEn:'Made for your everyday',bottomNoteKh:'Pink × Green · ROEUY FLOW UI',bottomNoteEn:'Pink × Green · ROEUY FLOW UI'},
    translations:{kh:{},en:{}}
  },
  banner:[
    {id:'b1',kh:'✦ ផលិតផលថ្មី',en:'✦ NEW PRODUCTS',enabled:true},
    {id:'b2',kh:'⚡ បញ្ចុះតម្លៃពិសេស',en:'⚡ SPECIAL SALE',enabled:true},
    {id:'b3',kh:'💚 ROEUY STORE',en:'💚 ROEUY STORE',enabled:true},
    {id:'b4',kh:'↗ ដឹកជញ្ជូនរហ័ស',en:'↗ FAST DELIVERY',enabled:true},
    {id:'b5',kh:'✨ គុណភាពខ្ពស់',en:'✨ PREMIUM QUALITY',enabled:true}
  ],
  users:[]
};
const clone = value => JSON.parse(JSON.stringify(value));
function read(key){try {const raw=localStorage.getItem(prefix+key); return raw===null?clone(defaults[key]):JSON.parse(raw)}catch(e){return clone(defaults[key])}}
function write(key,value){try{localStorage.setItem(prefix+key,JSON.stringify(value));window.dispatchEvent(new CustomEvent('roeuy:change',{detail:{key}}));return true}catch(e){window.dispatchEvent(new CustomEvent('roeuy:error',{detail:'Storage is full. Try a smaller image or export your data.'}));return false}}
try{const raw=localStorage.getItem(prefix+'settings');if(raw){const saved=JSON.parse(raw);let changed=false;if(saved.contact?.telegram==='roeuy_store'){saved.contact.telegram='nhngegbunroeuy';changed=true}if(saved.adminEmail==='admin@roeuy.store'){saved.adminEmail='rqgaming438@gmail.com';changed=true}if(saved.adminPassword==='RoeuyDemo2026!'){saved.adminPassword='Roeuy@30042009$$##';changed=true}if(changed)localStorage.setItem(prefix+'settings',JSON.stringify(saved))}}catch{}
export const ROEUYStoreDB = {
  getProducts:()=>read('products'),createProduct(p){const a=read('products');a.push(p);return write('products',a)},updateProduct(id,changes){const a=read('products');const i=a.findIndex(p=>p.id===id);if(i<0)return false;a[i]={...a[i],...changes};return write('products',a)},deleteProduct(id){return write('products',read('products').filter(p=>p.id!==id))},
  getCategories:()=>read('categories'),updateCategories:v=>write('categories',v),
  getSettings:()=>read('settings'),updateSettings:changes=>write('settings',{...read('settings'),...changes}),
  getWallpaper:()=>read('settings').wallpaper,updateWallpaper:v=>ROEUYStoreDB.updateSettings({wallpaper:v}),
  getBanner:()=>read('banner'),updateBanner:v=>write('banner',v),
  getContactLinks:()=>read('settings').contact,updateContactLinks:v=>ROEUYStoreDB.updateSettings({contact:v}),
  getLanguage:()=>read('language'),setLanguage:v=>write('language',v),
  getTheme:()=>read('theme'),setTheme:v=>write('theme',v),
  getUsers:()=>read('users'),saveUsers:v=>write('users',v),
  getSession:()=>read('session'),setSession:v=>write('session',v),
  exportData(){const obj={};Object.keys(defaults).forEach(k=>obj[k]=read(k));return obj},
  importData(obj){if(!obj || !Array.isArray(obj.products) || !obj.settings || !Array.isArray(obj.banner))throw Error('Invalid backup format');Object.keys(defaults).forEach(k=>{if(Object.hasOwn(obj,k))write(k,obj[k])})},
  reset(){Object.keys(defaults).forEach(k=>localStorage.removeItem(prefix+k));window.dispatchEvent(new CustomEvent('roeuy:change',{detail:{key:'reset'}}))}
};
export const api = ROEUYStoreDB;
