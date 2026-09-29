# ROEUY STORE — ROEUY FLOW UI

វេបសាយហាងលក់គ្រឿងបន្លាស់ឌីជីថល **KH + EN** រចនាដោយ Vanilla HTML/CSS/JavaScript។ មិនចាំបាច់ `npm install` ឬ build ទេ។ មានទំព័រហាង និង **ROEUY STUDIO** សម្រាប់គ្រប់គ្រងផលិតផល រូបភាព ផ្ទៃខាងក្រោយ បដា អត្ថបទ និងពណ៌។ ទិន្នន័យរក្សានៅក្នុង `localStorage` របស់ browser សម្រាប់ការសាកល្បង Version 1។

> **សំខាន់៖ នេះជា frontend demo មិនមែនប្រព័ន្ធលក់ពិតដែលមាន backend ទេ។** ពាក្យសម្ងាត់ និង admin ក្នុង localStorage **មិនមានសុវត្ថិភាព**។ អ្នកណាដែលអាចមើល source code/browser storage អាចចូល ឬកែទិន្នន័យបាន។ កុំប្រើសម្រាប់ទិន្នន័យអតិថិជនពិត ឬបង់ប្រាក់។ មុនបើកហាងពិត ត្រូវប្រើ server-side authentication, database និងការអនុញ្ញាតដែលពិនិត្យនៅ server។

## A. របៀបបើក Project

1. ទាញយក folder `ROEUY-STORE` ទាំងមូល។ កុំយកតែ `index.html` ព្រោះឯកសារ CSS/JS/images ត្រូវនៅជាមួយគ្នា។
2. ដំឡើង **Visual Studio Code** ពីគេហទំព័រផ្លូវការ `code.visualstudio.com`។
3. បើក VS Code → **File → Open Folder** → ជ្រើស folder `ROEUY-STORE`។

## B. របៀប Run Website

1. នៅក្នុង VS Code ចុច **Extensions** (រូបការ៉េនៅខាងឆ្វេង)។
2. ស្វែងរក និងដំឡើង **Live Server**។
3. បើក `index.html` → ចុចស្ដាំ → **Open with Live Server**។
4. Browser នឹងបើកហាង។ ចុច Home, Shop, About, Contact ដើម្បីមើលទំព័រផ្សេងៗ។
5. **កុំបើកដោយ `file://`** ប្រសិនបើ module JS មិនដំណើរការ។ Live Server ប្រើ HTTP ហើយដំណើរការត្រឹមត្រូវ។ អាចប្រើ `python -m http.server 8000` នៅក្នុង folder ផងដែរ។

## C. របៀបបើក Admin

1. បើក `admin/index.html` នៅលើ Live Server ឬចុច **Dashboard** នៅ footer។ URL ឧទាហរណ៍៖ `http://127.0.0.1:5500/admin/` ឬ `/admin/index.html`។
2. ចូលតាមទំព័រ Sign In ដោយគណនី demo៖
   - Email: **rqgaming438@gmail.com**
   - Password: **Roeuy@30042009$$##**
3. បន្ទាប់ពី Sign In ទំព័រ Admin បើកដោយស្វ័យប្រវត្តិ។ បើចង់ប្តូរ password demo៖ **Account Settings**។ នេះមិនធ្វើឱ្យ frontend មានសុវត្ថិភាពពិតទេ។
4. Admin មាន Overview, Products, Categories, Website Settings, Wallpaper, Hero Banner, Scrolling Banner, About, Contact, Footer, Language, Social Links និង Account Settings។

## D. របៀបបន្ថែម Product

1. ចូល **Admin → Products** → ចុច **Add product**។
2. បញ្ចូល Product ID មិនស្ទួនគ្នា (ឧ. `RS-007`), ឈ្មោះ KH/EN, Description KH/EN, តម្លៃ, តម្លៃចាស់, Discount %, ប្រភេទ, Stock និង Specifications KH/EN។
3. បញ្ចូល Image URL ឬចុច **Upload image**។ រូប upload គួរតែតូចជាង **900 KB** ព្រោះ localStorage មានទំហំកំណត់។ URL រូបពីអ៊ីនធឺណិតត្រូវមានបណ្តាញពេលមើលវេបសាយ។
4. ធីក **Visible** ដើម្បីបង្ហាញផលិតផល។ ចុច **Save changes**។ Refresh ទំព័រ Shop ដើម្បីឃើញផលិតផលថ្មី។

## E. របៀបកែ Product

- ក្នុងបញ្ជី Products ចុច **✎** ដើម្បីកែឈ្មោះ តម្លៃ រូប Stock និងព័ត៌មានផ្សេងៗ។
- ចុច **◉/◌** ដើម្បីលាក់ ឬបង្ហាញផលិតផល។ ចុច **×** ដើម្បីលុប (មានប្រអប់សួរបញ្ជាក់)។
- **Categories** អាចកែឈ្មោះ KH/EN និងបន្ថែមថ្មី។ មិនអាចលុប category ដែលមានផលិតផលប្រើប្រាស់នៅឡើយទេ។

## F. របៀបប្តូរ Wallpaper

1. Admin → **Wallpaper**។
2. Upload រូប ឬបញ្ចូល Image URL។ កែ **Overlay opacity** (0 = រូបច្បាស់, 1 = ស្រាល/សគ្រប), **Background position**, **Background size**។
3. មើល Preview ខាងស្ដាំ → ចុច **Save changes**។ ចង់ដករូបចេញ ចុច **Remove wallpaper** បន្ទាប់មក **Save changes**។

## G. របៀបប្តូរ Banner

- **Hero Banner**៖ កែចំណងជើង KH/EN, Subtitle KH/EN, Button KH/EN, Button URL, background image, overlay និង animation → Save។
- **Scrolling Banner**៖ កែសារ KH/EN, បន្ថែមថ្មី, លុប, ធីក/ដោះធីក Enabled ឬចុច ↑ ↓ ដើម្បីប្តូរលំដាប់ → Save។ សារដែល Enabled បង្ហាញលើទំព័រដើមជាបដារត់។

## H. របៀបប្តូរ Logo

Admin → **Website Settings** → នៅ **Logo · URL** ដាក់ URL រូប ឬ **Upload image**។ អាចប្តូរ Favicon, ឈ្មោះវេបសាយ, ពណ៌ Pink/Green, background, text color, button shape និង border radius នៅទីនោះ។ មើល live preview → Save។ បើ Logo ទទេ ប្រព័ន្ធប្រើ monogram `R.` ដើម។

## I. របៀបប្តូរ Contact

Admin → **Contact** ដើម្បីកែ Telegram username, Facebook URL, Email, Phone និង Instagram URL។ **Social Links** អាចកែបណ្តាញសង្គមដូចគ្នា។ ប៊ូតុង **Contact To Buy** បើកទម្រង់បញ្ជាទិញដែលត្រូវបំពេញឈ្មោះ លេខទូរស័ព្ទ ទីតាំង និងជ្រើស VET ឬ J&T; ចំណាំអាចបំពេញបាន។ សារដែលរៀបចំមានព័ត៌មានអតិថិជន និងផលិតផល ហើយបើក Telegram chat ដែលបានកំណត់ (default `@nhngegbunroeuy`)។ បើរូបផលិតផលជាឯកសារក្នុង store វានឹងទាញយកដើម្បីឲ្យអតិថិជនភ្ជាប់ទៅសារ; បើជា HTTPS URL សារមាន link រូប។ Telegram មិនអនុញ្ញាតឲ្យ browser upload ឬផ្ញើរូបដោយស្វ័យប្រវត្តិទេ ដូច្នេះអតិថិជនត្រូវភ្ជាប់រូបក្នុង Telegram និងចុច **Send**។

## J. របៀបប្តូរ Khmer / English

ចុច **KH | EN** នៅ navbar, footer ឬ admin top bar។ ភាសាដើមគឺ **ខ្មែរ**។ ភាសាដែលជ្រើសត្រូវរក្សាក្នុង localStorage។ ផលិតផលមានឈ្មោះ/ពិពណ៌នា KH និង EN ដាច់ដោយឡែក។ Admin → **Language** អាច override UI labels សំខាន់ៗបាន; ទុកទទេដើម្បីប្រើអត្ថបទដើម។ ដើម្បីបន្ថែមភាសាថ្មីពេលក្រោយ សូមបន្ថែម dictionary ក្នុង `js/language.js`, បន្ថែម field ផលិតផល និងប៊ូតុងភាសា។

## K. របៀប Deploy

**សំខាន់**៖ Upload folder contents (`index.html`, `css/`, `js/`, `admin/`...) ទាំងមូល។ គម្រោងនេះជា **static site** មិនចាំបាច់ build command ទេ។

### Option 1 — Cloudflare Pages
1. បង្កើតគណនី Cloudflare → **Workers & Pages → Create → Pages**។
2. ជ្រើស **Direct Upload** ហើយ upload folder `ROEUY-STORE` (ឬ zip ដែលមាន `index.html` នៅ root)។
3. បើភ្ជាប់ Git repository៖ framework preset **None**, build command **ទទេ**, output directory **root** ឬ folder `ROEUY-STORE` បើ repo root នៅខាងក្រៅ។
4. Publish → បើក URL Pages ហើយសាក `/admin/index.html`។

### Option 2 — GitHub Pages
1. បង្កើត GitHub repository; upload ឯកសារទាំងអស់ឱ្យ `index.html` នៅ root របស់ repository (ឬដាក់ folder `ROEUY-STORE` ហើយ link នឹងមាន `/ROEUY-STORE/`)។
2. **Settings → Pages → Build and deployment → Deploy from a branch**។
3. Branch `main`, folder `/ (root)` → **Save**។
4. រង់ចាំ deploy រួចបើក URL ដែល GitHub ផ្តល់។ តំណក្នុង project ជា relative paths ដូច្នេះដំណើរការក្រោម subpath បាន។

### Option 3 — Netlify
1. ចូល Netlify → **Add new site → Deploy manually**។
2. Drag & drop folder `ROEUY-STORE` ដែលមាន `index.html` នៅ root។
3. Netlify នឹងផ្តល់ URL។ ប្រសិនបើភ្ជាប់ Git៖ build command **ទទេ**, publish directory `ROEUY-STORE` (បើ repo មាន folder នេះនៅ root)។

> ការកែទិន្នន័យក្នុង Admin **មិន sync ទៅ visitor ផ្សេងៗ** ទេ។ localStorage ស្ថិតនៅ browser/origin នីមួយៗ។ ដើម្បីឱ្យទំនិញដែលអ្នកកែបង្ហាញដល់មនុស្សទាំងអស់ ត្រូវភ្ជាប់ database/API ពិត។ JSON នៅ `data/` ជា mock/reference មិនមែន database ដែល Admin សរសេរទៅទេ។

## L. របៀប Backup Data

1. Admin → **Account Settings → Export backup** ដើម្បីទាញយក `roeuy-store-backup.json`។
2. រក្សាឯកសារនេះឱ្យមានសុវត្ថិភាព ព្រោះ demo backup អាចមាន password ជា plain text។
3. នៅ browser/origin ដដែល ឬថ្មី ចូល Account Settings → **Import backup** → ជ្រើស JSON។
4. **Reset demo data** នឹងលុប data ក្នុង browser នោះ ហើយប្រើ default content វិញ។ Export មុន reset។

## ឯកសារសំខាន់ៗ

```text
ROEUY-STORE/
├── index.html, shop.html, about.html, contact.html
├── login.html, register.html
├── admin/
│   ├── index.html, products.html, settings.html, wallpaper.html, banner.html
├── assets/images/           # រូបផលិតផល SVG ផ្ទាល់ខ្លួន
├── assets/icons/            # Logo និង favicon
├── assets/fonts/            # Noto Sans Khmer (local, OFL license)
├── css/style.css, responsive.css, admin.css
├── js/app.js, products.js, language.js, auth.js, animation.js, admin.js, storage.js
├── data/products.json, settings.json  # គំរូសម្រាប់អាន/ផ្ទៀងផ្ទាត់
└── README.md
```

### សម្រាប់អ្នកអភិវឌ្ឍន៍បន្ត

`js/storage.js` ផ្តល់ `ROEUYStoreDB` និង `api` ជាមួយ `getProducts()`, `createProduct()`, `updateProduct()`, `deleteProduct()`, `getSettings()`, `updateSettings()`។ ពេលបង្កើត backend អាចជំនួស storage adapter នេះដោយ REST API/Cloudflare D1/Firebase/MySQL; រូបអាចទៅ Cloudflare R2; authentication/payment ត្រូវពិនិត្យនៅ server។ មិនត្រូវយក demo admin credential ឬ localStorage auth ទៅប្រើក្នុង production ទេ។

**អាជ្ញាប័ណ្ណ font**៖ Noto Sans Khmer ត្រូវបានរក្សាទុកក្នុង `assets/fonts/` សម្រាប់អក្សរខ្មែរច្បាស់ល្អ offline។ លិខិតអាជ្ញាប័ណ្ណ SIL Open Font License មានក្នុង `assets/fonts/OFL.txt`។
