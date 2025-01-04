import bcryptjs from 'bcryptjs';

interface SeedProduct {
    description: string;
    images: string[];
    inStock: number;
    price: number;
    sizes: ValidSizes[];
    slug: string;
    tags: string[];
    title: string;
    type: ValidTypes;
    typeproduct: 'vestuario'|'chalecos'|'baston'|'accesories'
}

interface SeedUser{
    email: string;
    password: string;
    name: string;
    role: 'admin' | 'user'
}



type ValidSizes = 'S'|'M'|'L'|'XL'| 'None';
type ValidTypes = 'shirts'|'pants'|'jackets'|'boots'| 'klevar'| 'helmet'| 'gloves'| 'tacticalbag'| 'protections'| 'belts'| 'flashlight'| 'laser'| 'pens'| 'handcuff'| 'guardbaton'| 'radio';

interface SeedData {
    users: SeedUser[];
    categories: string[];
    products: SeedProduct[];
}




export const initialData: SeedData = {

    users: [
        {
            email: 'jorge@google.com',
            name: 'Jorge Pilcante',
            password: bcryptjs.hashSync('123456'),
            role: 'admin'
        },
        {
            email: 'melissa@google.com',
            name: 'Melissa Perez',
            password: bcryptjs.hashSync('234567'),
            role: 'user'
        },
    ],


    categories:[
        'Shirts','Pants','Jackets','Boots', 'Klevar', 'Helmet', 'Gloves', 'Tacticalbag', 'Protections', 'Belts', 'Flashlight', 'Laser', 'Pens', 'Handcuff', 'Guardbaton', 'Radio'
    ],

    products: [
        {
            description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
            images: [
                'botas_swat.jpg'                
            ],
            inStock: 7,
            price: 25000,
            sizes: ['M','L','XL'],
            slug: "botas_tacticas_swat",
            type: 'boots',
            tags: ['boot'],
            title: "Botas Tacticas S.W.A.T",
            typeproduct: 'vestuario'
        },
        {
            description: "The Men's Quilted Shirt Jacket features a uniquely fit, quilted design for warmth and mobility in cold weather seasons. With an overall street-smart aesthetic, the jacket features subtle silicone injected Tesla logos below the back collar and on the right sleeve, as well as custom matte metal zipper pulls. Made from 87% nylon and 13% polyurethane.",
            images: [
                'botas_delta.jpg'
            ],
            inStock: 5,
            price: 35000,
            sizes: ['M','XL'],
            slug: "botas_tacticas_delta",
            type: 'boots',
            tags: ['boot'],
            title: "Botas Tacticas Delta",
            typeproduct: 'vestuario'
        },
        
        {
            description: "Introducing the Tesla Raven Collection. The Men's Raven Lightweight Zip Up Bomber has a premium, modern silhouette made from a sustainable bamboo cotton blend for versatility in any season. The hoodie features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, a concealed chest pocket with custom matte zipper pulls and a french terry interior. Made from 70% bamboo and 30% cotton.",
            images: [
                'botas_magnum.jpg'
            ],
            inStock: 10,
            price: 40000,
            sizes: ['M','L','XL'],
            slug: "botas_tacticas_magnum",
            type: 'boots',
            tags: ['boot'],
            title: "Botas Tacticas Magnum",
            typeproduct: 'vestuario'
        },

        {
            description: "Introducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Men's Turbine Long Sleeve Tee features a subtle, water-based T logo on the left chest and our Tesla wordmark below the back collar. The lightweight material is double-dyed, creating a soft, casual style for ideal wear in any season. Made from 50% cotton and 50% polyester.",
            images: [
                'guantes_dedos_largos.jpg'
            ],
            inStock: 50,
            price: 9000,
            sizes: ['M','L'],
            slug: "guantes_tacticos_largos",
            type: 'gloves',
            tags: ['glove'],
            title: "Guantes Tacticos Dedos Largos",
            typeproduct: 'vestuario'
        },
        {
            description: "Introducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Men's Turbine Short Sleeve Tee features a subtle, water-based Tesla wordmark across the chest and our T logo below the back collar. The lightweight material is double-dyed, creating a soft, casual style for ideal wear in any season. Made from 50% cotton and 50% polyester.",
            images: [
                'guantes_dedos_cortos.jpg'
            ],
            inStock: 50,
            price: 7000,
            sizes: ['M','L','XL'],
            slug: "guantes_dedos_cortos",
            type: 'gloves',
            tags: ['glove'],
            title: "Guantes Tacticos Dedos Cortos",
            typeproduct: 'vestuario'
        },
        {
            description: "Designed for comfort, the Cybertruck Owl Tee is made from 100% cotton and features our signature Cybertruck icon on the back.",
            images: [
                'bolso_militar_multi.jpg'
            ],
            inStock: 0,
            price: 5000,
            sizes: ['M','L','XL'],
            slug: "bolso_tactico_militar",
            type: 'tacticalbag',
            tags: ['tactical bag'],
            title: "Bolso Tactico Militar Multiuso",
            typeproduct: 'vestuario'
        },
        {
            description: "Inspired by the world’s most unlimited resource, the Let the Sun Shine Tee highlights our fully integrated home solar and storage system. Designed for fit, comfort and style, the tee features a sunset graphic along with our Tesla wordmark on the front and our signature T logo printed above 'Solar Roof' on the back. Made from 100% Peruvian cotton.",
            images: [
                'polera_pique_sport.jpg'
            ],
            inStock: 17,
            price: 13000,
            sizes: ['XL'],
            slug: "polera_pique_sport_corta",
            type: 'shirts',
            tags: ['shirt'],
            title: "Polera Pique DryFresh Sport Color: Negro",
            typeproduct: 'vestuario'
        },
        {
            description: "Designed for fit, comfort and style, the Men's 3D Large Wordmark Tee is made from 100% Peruvian cotton with a 3D silicone-printed Tesla wordmark printed across the chest.",
            images: [
                'polera_polo_dryfresh.jpg'
            ],
            inStock: 12,
            price: 12000,
            sizes: ['M'],
            slug: "polera_polo_fresh_corta",
            type: 'shirts',
            tags: ['shirt'],
            title: "Polera Polo DryFresh Color: Negro",
            typeproduct: 'vestuario'
        },
        {
            description: "Designed for fit, comfort and style, the Tesla T Logo Tee is made from 100% Peruvian cotton and features a silicone-printed T Logo on the left chest.",
            images: [
                'polera_tactica_manga_larga.jpg'
            ],
            inStock: 5,
            price: 17000,
            sizes: ['M','XL'],
            slug: "polera_tactica_manga_larga",
            type: 'shirts',
            tags: ['shirt'],
            title: "Polera Tactica Manga Larga Color: Negro",
            typeproduct: 'vestuario'
        },
        {
            description: "Designed for comfort and style in any size, the Tesla Small Wordmark Tee is made from 100% Peruvian cotton and features a 3D silicone-printed wordmark on the left chest.",
            images: [
                'chaqueta_tactica.jpg'
            ],
            inStock: 5,
            price: 29000,
            sizes: ['M'],
            slug: "chaqueta_tactica_softshell",
            type: 'shirts',
            tags: ['shirt'],
            title: "Chaqueta Tactica SoftShell",
            typeproduct: 'vestuario'
        },
        {
            description: "Designed to celebrate Tesla's incredible performance mode, the Plaid Mode Tee features great fit, comfort and style. Made from 100% cotton, it's the next best thing to riding shotgun at the Nürburgring.",
            images: [
                'pack_coderas_rodillas.jpg'
            ],
            inStock: 50,
            price: 10000,
            sizes: ['M','L','XL'],
            slug: "men_plaid_mode_tee",
            type: 'protections',
            tags: ['protection'],
            title: "Pack Coderas y Rodilleras",
            typeproduct: 'chalecos'
        },
        {
            description: "Inspired by our popular home battery, the Tesla Powerwall Tee is made from 100% cotton and features the phrase 'Pure Energy' under our signature logo in the back. Designed for fit, comfort and style, the exclusive tee promotes sustainable energy in any environment.",
            images: [
                'pantalon_antifluido.jpg'
            ],
            inStock: 24,
            price: 22000,
            sizes: ['S','XL'],
            slug: "pantalon_antifluido",
            type: 'pants',
            tags: ['pant'],
            title: "Pantalon Tactico Antifluido",
            typeproduct: 'vestuario'
        },
        {
            description: "Inspired by Tesla Battery Day and featuring the unveiled tabless battery cell, Battery Day Tee celebrates the future of energy storage and cell manufacturing. Designed for fit, comfort and style, Battery Day Tee is made from 100% cotton with a stylized cell printed across the chest. Made in Peru.",
            images: [
                'cinturon_cobra.jpg'
            ],
            inStock: 15,
            price: 5000,
            sizes: ['M'],
            slug: "cinturon_cobra_negro",
            type: 'belts',
            tags: ['belt'],
            title: "Cinturon Cobra",
            typeproduct: 'vestuario'
        },
        {
            description: "Designed for exceptional comfort and inspired by the Cybertruck unveil event, the Cybertruck Bulletproof Tee is made from 100% cotton and features our signature Cybertruck icon on the back.",
            images: [
                'cinturon_na_tactico.jpg'
            ],
            inStock: 15,
            price: 4500,
            sizes: ['M','L'],
            slug: "cinturon_tactico",
            type: 'belts',
            tags: ['belt'],
            title: "Cinturon N.A Tactico",
            typeproduct: 'vestuario'
        },
        {
            description: "Inspired by the Model Y order confirmation graphic, the limited edition Haha Yes Tee is designed for comfort and style. Made from 100% Peruvian cotton and featuring the Tesla wordmark across the chest, the exclusive tee will commemorate your order for years to come.",
            images: [
                'chaleco_tactico_militar.jpg'
            ],
            inStock: 10,
            price: 45000,
            sizes: ['M','L','XL'],
            slug: "chaleco_tactico_militar_negro",
            type: 'klevar',
            tags: ['klevar'],
            title: "Chaleco Tactico Militar",
            typeproduct: 'chalecos'
        },
        {
            description: "Designed for fit, comfort and style, the limited edition S3XY Tee is made from 100% cotton with a 3D silicone-printed “S3XY” logo across the chest. Made in Peru. Available in black.",
            images: [
                'chaleco_anticorte.jpg'
            ],
            inStock: 15,
            price: 70000,
            sizes: ['S','M','L'],
            slug: "chaleco_anticorte_seguro",
            type: 'klevar',
            tags: ['klevar'],
            title: "Chaleco AntiCorte + Seguro 30 UF",
            typeproduct: 'chalecos'
        },
        {
            description: "Designed for fit, comfort and style, the Men's 3D Wordmark Long Sleeve Tee is made from 100% cotton and features an understated wordmark logo on the left chest.",
            images: [
                'linterna_tactica_100mil.jpg'
            ],
            inStock: 15,
            price: 15000,
            sizes: ['None'],
            slug: "linterna_tactica_xbalg",
            type: 'flashlight',
            tags: ['flashlight'],
            title: "Linterna Tactica X-Balg 100.000 lumines",
            typeproduct: 'accesories'
        },
        {
            description: "Designed for fit, comfort and style, the Men's 3D T Logo Long Sleeve Tee is made from 100% cotton and features an understated T logo on the left chest.",
            images: [
                'linterna_tactica_5mil.jpg'
            ],
            inStock: 12,
            price: 12000,
            sizes: ['None'],
            slug: "linterna_tactica_xbalg_5mil",
            type: 'flashlight',
            tags: ['flashlight'],
            title: "Linterna Tactica X-Balg 5.000 lumines",
            typeproduct: 'accesories'
        },
        {
            description: "Introducing the Tesla Raven Collection. The Men's Raven Lightweight Hoodie has a premium, relaxed silhouette made from a sustainable bamboo cotton blend. The hoodie features subtle thermoplastic polyurethane Tesla logos across the chest and on the sleeve with a french terry interior for versatility in any season. Made from 70% bamboo and 30% cotton.",
            images: [
                'linterna_tactic_flashlight.jpg'
            ],
            inStock: 10,
            price: 12000,
            sizes: ['None'],
            slug: "linterna_flashlight",
            type: 'flashlight',
            tags: ['flashlight'],
            title: "Linterna Tactica Flashlight 3 LED",
            typeproduct: 'accesories'
        },
        {
            description: "Introducing the Tesla Chill Collection. The Chill Pullover Hoodie has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The unisex hoodie features subtle thermoplastic polyurethane Tesla logos across the chest and on the sleeve, a double layer single seam hood and pockets with custom matte zipper pulls. Made from 60% cotton and 40% recycled polyester.",
            images: [
                'greenlaser_pointer.jpg'
            ],
            inStock: 10,
            price: 9000,
            sizes: ['None'],
            slug: "green_laser_303",
            type: 'laser',
            tags: ['laser'],
            title: "Green Laser Pointer 303",
            typeproduct: 'accesories'
        },
        {
            description: "Introducing the Tesla Chill Collection. The Men's Chill Full Zip Hoodie has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The hoodie features subtle thermoplastic polyurethane Tesla logos on the left chest and sleeve, a double layer single seam hood and pockets with custom matte zipper pulls. Made from 60% cotton and 40% recycled polyester.",
            images: [
                'casco_tactico.jpg'
            ],
            inStock: 20,
            price: 22000,
            sizes: ['None'],
            slug: "casco_tactico_negro",
            type: 'helmet',
            tags: ['helmet'],
            title: "Tactico Tactico Color: Negro",
            typeproduct: 'chalecos'
        },
        {
            description: "Introducing the Tesla Chill Collection. The Men’s Chill Quarter Zip Pullover has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The pullover features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, as well as a custom matte zipper pull. Made from 60% cotton and 40% recycled polyester.",
            images: [
                'balaclava_tactica.jpg'
            ],
            inStock: 16,
            price: 3000,
            sizes: ['None'],
            slug: "balaclava_tactica_negro",
            type: 'helmet',
            tags: ['accesories'],
            title: "Balaclava Tactica Color: Negro",
            typeproduct: 'chalecos'
        },
        {
            description: "Introducing the Tesla Chill Collection. The Men’s Chill Quarter Zip Pullover has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The pullover features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, as well as a custom matte zipper pull. Made from 60% cotton and 40% recycled polyester.",
            images: [
                'lapiz_tactico_metal.jpg'
            ],
            inStock: 15,
            price: 7000,
            sizes: ['None'],
            slug: "lapiz_metal_rompe_cristal",
            type: 'pens',
            tags: ['pen'],
            title: "Lapiz Tactico de Metal",
            typeproduct: 'accesories'
        },
        {
            description: "The Unisex 3D Large Wordmark Pullover Hoodie features soft fleece and an adjustable, jersey-lined hood for comfort and coverage. Designed in a unisex style, the pullover hoodie includes a tone-on-tone 3D silicone-printed wordmark across the chest.",
            images: [
                'esposas_seguridad.jpg'
            ],
            inStock: 15,
            price: 20000,
            sizes: ['None'],
            slug: "esposas_de_seguridad",
            type: 'handcuff',
            tags: ['handcuff'],
            title: "Esposas de Seguridad",
            typeproduct: 'baston'
        },
        {
            description: "As with the iconic Tesla logo, the Cybertruck Graffiti Hoodie is a classic in the making. Unisex style featuring soft fleece and an adjustable, jersey-lined hood for comfortable coverage.",
            images: [
                'porta_esposas.jpg'
            ],
            inStock: 13,
            price: 7000,
            sizes: ['None'],
            slug: "porta_esposas_tactico",
            type: 'handcuff',
            tags: ['handcuff-accesories'],
            title: "Porta Esposas Tactico",
            typeproduct: 'baston'
        },
        {
            description: "The Relaxed T Logo Hat is a classic silhouette combined with modern details, featuring a 3D T logo and a custom metal buckle closure. The ultrasoft design is flexible and abrasion resistant, while the inner sweatband includes quilted padding for extra comfort and moisture wicking. The visor is fully made from recycled plastic bottles. 100% Cotton.",
            images: [
                'porta_baston_tactico.jpg'
            ],
            inStock: 11,
            price: 7000,
            sizes: ['None'],
            slug: "porta_baston_tactico_polimero",
            type: 'guardbaton',
            tags: ['guard-baton accesories'],
            title: "Porta Baston Tactico Polimero",
            typeproduct: 'baston'
        },
        {
            description: "The Relaxed T Logo Hat is a classic silhouette combined with modern details, featuring a 3D T logo and a custom metal buckle closure. The ultrasoft design is flexible and abrasion resistant, while the inner sweatband includes quilted padding for extra comfort and moisture wicking. The visor is fully made from recycled plastic bottles. 100% Cotton.",
            images: [
                'baston_tactico_polimero.jpg'
            ],
            inStock: 10,
            price: 17000,
            sizes: ['None'],
            slug: "baston_tactic_polimero_protection",
            type: 'guardbaton',
            tags: ['guard-baton'],
            title: "Baston Tactico de Polimero",
            typeproduct: 'baston'
        },
        {
            description: "The Women's Cropped Puffer Jacket features a uniquely cropped silhouette for the perfect, modern style while on the go during the cozy season ahead. The puffer features subtle silicone injected Tesla logos below the back collar and on the right sleeve, custom matte metal zipper pulls and a soft, fleece lined collar. Made from 87% nylon and 13% polyurethane.",
            images: [
                'baston_retractil_de_polimero.jpg'
            ],
            inStock: 20,
            price: 15000,
            sizes: ['None'],
            slug: "baston_retractil_polimero_funda",
            type: 'guardbaton',
            tags: ['guard-baton'],
            title: "Baston Retractil de Polimero",
            typeproduct: 'baston'
        },
        {
            description: "Introducing the Tesla Chill Collection. The Women's Chill Half Zip Cropped Hoodie has a premium, soft fleece exterior and cropped silhouette for comfort in everyday lifestyle. The hoodie features an elastic hem that gathers at the waist, subtle thermoplastic polyurethane Tesla logos along the hood and on the sleeve, a double layer single seam hood and a custom ring zipper pull. Made from 60% cotton and 40% recycled polyester.",
            images: [
                'baston_retractil_metalico.jpg'
            ],
            inStock: 10,
            price: 25000,
            sizes: ['None'],
            slug: "baston_retractil_metalico_auto",
            type: 'guardbaton',
            tags: ['guard-baton'],
            title: "Baston Retractil Metalico",
            typeproduct: 'baston'
        },
        {
            description: "Introducing the Tesla Raven Collection. The Women's Raven Slouchy Crew Sweatshirt has a premium, relaxed silhouette made from a sustainable bamboo cotton blend. The slouchy crew features a subtle thermoplastic polyurethane Tesla wordmark on the left sleeve and a french terry interior for a cozy look and feel in every season. Pair it with your Raven Joggers or favorite on the go fit. Made from 70% bamboo and 30% cotton.",
            images: [
                '2_equipos_radio_baofeng.jpg'
            ],
            inStock: 9,
            price: 25000,
            sizes: ['None'],
            slug: "kit_2_radios_baofeng",
            type: 'radio',
            tags: ['radio-talk'],
            title: "Kit 2 Equipos de Radio Baofeng BF-777S",
            typeproduct: 'accesories'
        },
        {
            description: "Introducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Women's Turbine Cropped Long Sleeve Tee features a subtle, water-based Tesla wordmark across the chest and our T logo below the back collar. The lightweight material is double-dyed, creating a soft, casual style with a cropped silhouette. Made from 50% cotton and 50%",
            images: [
                'equipo_radio_baofeng_uv_5r.jpg'
            ],
            inStock: 10,
            price: 25000,
            sizes: ['None'],
            slug: "equipo_radio_uv_5r",
            type: 'radio',
            tags: ['radio-talk'],
            title: "Equipo de Radio Baofeng UV-5R",
            typeproduct: 'accesories'
        },
        {
            description: "ntroducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Women's Turbine Cropped Short Sleeve Tee features a subtle, water-based Tesla wordmark across the chest and our T logo below the back collar. The lightweight material is double-dyed, creating a soft, casual style with a cropped silhouette. Made from 50% cotton and 50% polyester.",
            images: [
                'equipo_radio_baofeng.jpg'
            ],
            inStock: 15,
            price: 38000,
            sizes: ['None'],
            slug: "equipo_baofeng_radio",
            type: 'radio',
            tags: ['radio-talk'],
            title: "Equipo de Radio Baofeng",
            typeproduct: 'accesories'
        },
        {
            description: "ntroducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Women's Turbine Cropped Short Sleeve Tee features a subtle, water-based Tesla wordmark across the chest and our T logo below the back collar. The lightweight material is double-dyed, creating a soft, casual style with a cropped silhouette. Made from 50% cotton and 50% polyester.",
            images: [
                'equipo_baofeng_9r_plus.jpg'
            ],
            inStock: 15,
            price: 54000,
            sizes: ['None'],
            slug: "equipo_baofeng_radio_9r_plus",
            type: 'radio',
            tags: ['radio-talk'],
            title: "Equipo de Radio Baofeng 9R Plus",
            typeproduct: 'accesories'
        },
        {
            description: "ntroducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Women's Turbine Cropped Short Sleeve Tee features a subtle, water-based Tesla wordmark across the chest and our T logo below the back collar. The lightweight material is double-dyed, creating a soft, casual style with a cropped silhouette. Made from 50% cotton and 50% polyester.",
            images: [
                'equipo_radio_bf1909.jpg'
            ],
            inStock: 15,
            price: 64900,
            sizes: ['None'],
            slug: "equipo_baofeng_radio_bf1909",
            type: 'radio',
            tags: ['radio-talk'],
            title: "Equipo de Radio Baofeng BF-1909",
            typeproduct: 'accesories'
        },
        {
            description: "ntroducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Women's Turbine Cropped Short Sleeve Tee features a subtle, water-based Tesla wordmark across the chest and our T logo below the back collar. The lightweight material is double-dyed, creating a soft, casual style with a cropped silhouette. Made from 50% cotton and 50% polyester.",
            images: [
                'auricular_baofeng.jpg'
            ],
            inStock: 15,
            price: 19000,
            sizes: ['None'],
            slug: "auricular_baofeng_negro",
            type: 'radio',
            tags: ['radio-accesories'],
            title: "Auricular Baofeng Waterproof",
            typeproduct: 'accesories'
        },
        {
            description: "ntroducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Women's Turbine Cropped Short Sleeve Tee features a subtle, water-based Tesla wordmark across the chest and our T logo below the back collar. The lightweight material is double-dyed, creating a soft, casual style with a cropped silhouette. Made from 50% cotton and 50% polyester.",
            images: [
                'cable_programacion_baofeng.jpg'
            ],
            inStock: 15,
            price: 12000,
            sizes: ['None'],
            slug: "cable_programacion",
            type: 'radio',
            tags: ['radio-accesories'],
            title: "Cable Programacion Baofeng",
            typeproduct: 'accesories'
        },
        {
            description: "ntroducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Women's Turbine Cropped Short Sleeve Tee features a subtle, water-based Tesla wordmark across the chest and our T logo below the back collar. The lightweight material is double-dyed, creating a soft, casual style with a cropped silhouette. Made from 50% cotton and 50% polyester.",
            images: [
                'auricular_simple.jpg'
            ],
            inStock: 15,
            price: 8000,
            sizes: ['None'],
            slug: "auricular_simple_negro",
            type: 'radio',
            tags: ['radio-accesories'],
            title: "Auricular Simple Compatible con Keendwood y Baofeng",
            typeproduct: 'accesories'
        },
        {
            description: "ntroducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Women's Turbine Cropped Short Sleeve Tee features a subtle, water-based Tesla wordmark across the chest and our T logo below the back collar. The lightweight material is double-dyed, creating a soft, casual style with a cropped silhouette. Made from 50% cotton and 50% polyester.",
            images: [
                'auricular_de_cuello.jpg'
            ],
            inStock: 15,
            price: 10000,
            sizes: ['None'],
            slug: "auricular_cuello_negro",
            type: 'radio',
            tags: ['radio-accesories'],
            title: "Auricular de Cuello Simple Compatible con Keendwood y Baofeng",
            typeproduct: 'accesories'
        },
        {
            description: "ntroducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Women's Turbine Cropped Short Sleeve Tee features a subtle, water-based Tesla wordmark across the chest and our T logo below the back collar. The lightweight material is double-dyed, creating a soft, casual style with a cropped silhouette. Made from 50% cotton and 50% polyester.",
            images: [
                'auricular_cuello_compatible.jpg'
            ],
            inStock: 20,
            price: 14000,
            sizes: ['None'],
            slug: "auricular_cuello_compatible",
            type: 'radio',
            tags: ['radio-accesories'],
            title: "Auricular de Cuello Compatible con Keendwood y Baofeng",
            typeproduct: 'accesories'
        },              
    ]
}