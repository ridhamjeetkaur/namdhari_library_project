// quick-add-books.js - Simple script to add books quickly
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

// Your Book schema
const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    cover: { type: String, required: true },
    rating: { type: Number, required: true, min: 0, max: 5 },
    category: { type: String, required: true },
    description: { type: String, required: true },
    link: { type: String },
    downloadLink: { type: String }
}, { timestamps: true, versionKey: false });

const Book = mongoose.model('Book', bookSchema);

// Quick 25 books data
const books = [
    { title: "Dasam Granth All", author: "Gurubani", cover:"covers/dasam_granth_all.png", rating: 4.2, category: "Gurbani", description: "Sikh History" ,link:"https://drive.google.com/file/d/1XiFdb3CxZ9yHsQ3R2UDFCtDK2XUFGYA6/view",downloadLink:"https://drive.google.com/uc?export=download&id=1XiFdb3CxZ9yHsQ3R2UDFCtDK2XUFGYA6"},
    { title: "Waryam March 2002", author: "Jagdish Singh Waryam", cover: "covers/WaryamMarch2002.png", rating: 4.2, category: "Stories", description: "Sikh History" ,link:"https://drive.google.com/file/d/1JqgivwNpNg3qi5q4XGr_NXPCUwKoswP1/view",downloadLink:"https://drive.google.com/uc?export=download&id=1JqgivwNpNg3qi5q4XGr_NXPCUwKoswP1"},
    { title: "Zindgi Bilaas", author: "Krit Saadhu Daya Singh Aaraf", cover: "covers/ZindgiBilas.png", rating: 4.2, category: "All", description: "Sikh History" ,link:"https://drive.google.com/file/d/13oP2_2u4dvEweTsqaa-sTkMzDrUChBFJ/view",downloadLink:"https://drive.google.com/uc?export=download&id=13oP2_2u4dvEweTsqaa-sTkMzDrUChBFJ"},
    { title: "Discourses of Satguru Partap Singh Ji Vol 1", author: "Sant Singh", cover: "covers/DiscoursesSPSJ.png", rating: 4.2, category: "Sri Satguru Partap Singh Ji", description: "Sikh History" ,link:"https://drive.google.com/file/d/11XCf9gUvK2MiTQKtRIsisuMvIJPZR7EW/view",downloadLink:"https://drive.google.com/uc?export=download&id=11XCf9gUvK2MiTQKtRIsisuMvIJPZR7EW"},
    { title: "Discourses of Satguru Partap Singh Ji Vol 2", author: "Sant Singh", cover: "covers/DiscoursesSPSJ2.png", rating: 4.2, category: "Sri Satguru Partap Singh Ji", description: "Sikh History" ,link:"https://drive.google.com/file/d/1Suj0Dsgwh3cUXYFziD4gQigeWuzYJMSv/view",downloadLink:"https://drive.google.com/uc?export=download&id=1Suj0Dsgwh3cUXYFziD4gQigeWuzYJMSv"},
    { title: "Satguru Bilas Bhaag 2", author: "Sant Santokh Singh Bahowal", cover: "covers/Satguru_bilas2.png", rating: 4.2, category: "Sri Satguru Ram Singh Ji", description: "Sikh History" ,link:"https://drive.google.com/drive/folders/1mvPox7rBA06G1GPDs0livj6N_L0qme0z/view",downloadLink:"https://drive.google.com/uc?export=download&id=1mvPox7rBA06G1GPDs0livj6N_L0qme0z"},
    { title: "Namdhari Nitnem", author: "Vishav Namdhari Sangat", cover: "covers/NamdhariNitnem.png", rating: 4.2, category: "Namdhari", description: "Sikh History" ,link:"https://drive.google.com/file/d/1U4BsCWFB9OIsE2ka7lBjM5yfQR5a5dAe/view",downloadLink:"https://drive.google.com/uc?export=download&id=1U4BsCWFB9OIsE2ka7lBjM5yfQR5a5dAe"},
    { title: "Jas Jeevan Bhaag 6", author: "Taran Singh Vehmi", cover: "covers/JasJeevan6.png", rating: 4.2, category: "Sri Satguru Partap Singh Ji", description: "Sikh History" ,link:"https://drive.google.com/file/d/1qKbZhifNFyPbrf3oaTTfbQlP30JAG7x9/view",downloadLink:"https://drive.google.com/uc?export=download&id=1qKbZhifNFyPbrf3oaTTfbQlP30JAG7x9"},
    { title: "Jas Jeevan Bhaag 1", author: "Taran Singh Vehmi", cover: "covers/JasJeevan1.png", rating: 4.2, category: "Sri Satguru Partap Singh Ji", description: "Sikh History" ,link:"https://drive.google.com/file/d/1NpxgdDjlTQMoBR-Q9NUSa72R0qU1TBZG/view",downloadLink:"https://drive.google.com/uc?export=download&id=1NpxgdDjlTQMoBR-Q9NUSa72R0qU1TBZG"},
    { title: "Sau Saakhi Sateek Bhaag 2", author: "Pratap Singh Mehta", cover: "covers/SauSakhi2.png", rating: 4.2, category: "Stories", description: "Sikh History" ,link:"https://drive.google.com/file/d/17nsiXPiiH2kxflu1D1zQJSllNMWeb-5u/view",downloadLink:"https://drive.google.com/uc?export=download&id=17nsiXPiiH2kxflu1D1zQJSllNMWeb-5u"},

    { title: "The Creator and The Satguru", author: "Tara Singh Anjan", cover: "covers/TheCreatorAndTheSatguru.png", rating: 4.2, category: "Namdhari", description: "Sikh History" ,link:"https://drive.google.com/file/d/1aoDZeCyJ-pPHqe357COI3pyyO9NLlEb_/view",downloadLink:"https://drive.google.com/uc?export=download&id=1aoDZeCyJ-pPHqe357COI3pyyO9NLlEb_"},
    { title: "The Creator and The Satguru", author: "Tara Singh Anjan", cover: "covers/TheCreatorAndTheSatguru.png", rating: 4.2, category: "Sri Satguru Ram Singh Ji", description: "Sikh History" ,link:"https://drive.google.com/file/d/1aoDZeCyJ-pPHqe357COI3pyyO9NLlEb_/view",downloadLink:"https://drive.google.com/uc?export=download&id=1aoDZeCyJ-pPHqe357COI3pyyO9NLlEb_"},
    { title: "The Namdhari Movement", author: "Navtej Singh", cover: "covers/TheNamdhariMovement.png", rating: 4.2, category: "Namdhari", description: "Sikh History" ,link:"https://drive.google.com/file/d/1wUGH7LJPeQzj36zqVn43UrBR1AxD-aW5/view",downloadLink:"https://drive.google.com/uc?export=download&id=1wUGH7LJPeQzj36zqVn43UrBR1AxD-aW5"},
    { title: "Jeevan Charitar Maharaj Jang Singh Ji", author: "Pushp Singh Kanwal", cover: "covers/jeevanChritrMaharajJangSingh.png", rating: 4.2, category: "Namdhari", description: "Sikh History" ,link:"https://drive.google.com/file/d/1A1Pj9Utk0Pdr92KJm-IyBappvKJTSY52/view",downloadLink:"https://drive.google.com/uc?export=download&id=1A1Pj9Utk0Pdr92KJm-IyBappvKJTSY52"},
   
    { title: "Namdhari Sangram Pradeepka", author: "Editor: H. S. Kanwal", cover: "covers/namdhariSangramPradeepka.png", rating: 4.2, category: "Namdhari", description: "Sikh History" ,link:"https://drive.google.com/file/d/1gEmcrGUzyInmz6EzdAB7dMli-5Kd8UlX/view",downloadLink:"https://drive.google.com/uc?export=download&id=1gEmcrGUzyInmz6EzdAB7dMli-5Kd8UlX"},
    { title: "Kuka Movement", author: "Dr. Fauja Singh Bajwa", cover: "covers/KukaMovement.png", rating: 4.2, category: "Namdhari", description: "Sikh History" ,link:"https://drive.google.com/file/d/1LXRe4m9AMR8jOR9O6iA5_SL4FO306t7N/view",downloadLink:"https://drive.google.com/uc?export=download&id=1LXRe4m9AMR8jOR9O6iA5_SL4FO306t7N"},
    { title: "Ghat Ghat Vaasi", author: "-", cover: "covers/Ghat_Ghat_Vasi.png", rating: 4.2, category: "Sri Satguru Jagjit Singh Ji", description: "Sikh History" ,link:"https://drive.google.com/uc?export=download&id=1B4GZ1IGJIExKcBpBnfgU9XGICd2kHnTy",downloadLink:"https://drive.google.com/uc?export=download&id=1B4GZ1IGJIExKcBpBnfgU9XGICd2kHnTy"},
    { title: "Namdhari Guru Ram Singh", author: "Joginder Singh", cover: "covers/Namdhari_guru_ram_singh.png", rating: 4.2, category: "Sri Satguru Ram Singh Ji", description: "Sikh History" ,link:"https://drive.google.com/file/d/1fqyhuqd7qnmIMwKscvgpyqKWu1sNI1Ia/view",downloadLink:"https://drive.google.com/uc?export=download&id=1fqyhuqd7qnmIMwKscvgpyqKWu1sNI1Ia"},
    { title: "Sri Satguru Ram singh Ji de Hukamnaame", author: "Jaswinder Singh", cover: "covers/", rating: 4.2, category: "Sri Satguru Ram Singh Ji", description: "Sikh History" ,link:"https://drive.google.com/file/d/1FfX9jS5Boo9Ckm-deir00ElCVH2_WR9X/view",downloadLink:"https://drive.google.com/uc?export=download&id=1FfX9jS5Boo9Ckm-deir00ElCVH2_WR9X"},
    
    { title: "Discourses of Satguru Partap Singh Ji Vol.-3", author: "Editor-Sant Singh", cover: "covers/discourses_spsj3.png", rating: 4.2, category: "Sri Satguru Partap Singh Ji", description: "Sikh History" ,link:"https://drive.google.com/file/d/1MkZdXJ6zQY3AciD5SMXx1hnF5bJfLq--/view",downloadLink:"https://drive.google.com/uc?export=download&id=1MkZdXJ6zQY3AciD5SMXx1hnF5bJfLq--"},
    { title: "Laal Eh Ratan Bhaag-5", author: "Principal Beant Kaur", cover: "covers/lalEhRatan5.png", rating: 4.2, category: "Sri Satguru Partap Singh Ji", description: "Sikh History" ,link:"https://drive.google.com/file/d/1GHUmubc4XsAeCe3LlknKozcWlB-W_LDQ/view",downloadLink:"https://drive.google.com/uc?export=download&id=1GHUmubc4XsAeCe3LlknKozcWlB-W_LDQ"},
    { title: "Jas Jeevan Bhaag-3", author: "Taran Singh Vehmi", cover: "covers/jasJeevan3.png", rating: 4.2, category: "Sri Satguru Partap Singh ji", description: "Sikh History" ,link:"https://drive.google.com/file/d/1xpoiK3bXnjjvcRivZ03SXAq3Dl-U-4QC/view",downloadLink:"https://drive.google.com/uc?export=download&id=1xpoiK3bXnjjvcRivZ03SXAq3Dl-U-4QC"},
    { title: "Pehla Maran Kabool", author: "Sant Inder Singh Chakkarvarti", cover: "covers/", rating: 4.2, category: "Sri Satguru Jagjit Singh Ji", description: "Sikh History" ,link:"https://drive.google.com/file/d/1Rc_cUsj05_owaH828y0_7jCrIk93z8Pf/view",downloadLink:"https://drive.google.com/uc?export=download&id=1Rc_cUsj05_owaH828y0_7jCrIk93z8Pf"},
    { title: "A Saga Of Sri Satguru Jagjit Singh Ji", author: "Dr. Sharada Jayagovind", cover: "covers/", rating: 4.2, category: "Sri Satguru Jagjit Singh Ji", description: "Sikh History" ,link:"https://drive.google.com/file/d/10Ev7MLGkO5hk7mz94Lo3YrGuoWBHxgMM/view",downloadLink:"https://drive.google.com/uc?export=download&id=10Ev7MLGkO5hk7mz94Lo3YrGuoWBHxgMM"},
    { title: "Hum Hindu Hain Bhaag 2", author: "Rajinder Singh Nirala", cover: "covers/", rating: 4.2, category: "Sikh", description: "Sikh History" ,link:"https://drive.google.com/file/d/15sdpluoTtdqI93BuHbmXW1dCJxLbeobF/view",downloadLink:"https://drive.google.com/uc?export=download&id=15sdpluoTtdqI93BuHbmXW1dCJxLbeobF"},
    { title: "Pankhrian", author: "Amrik Singh", cover: "covers/", rating: 4.2, category: "Poetry", description: "Sikh History" ,link:"https://drive.google.com/file/d/1fy2V8oIqQQ2_Z8M7Dc9Xhexv8GArjmkB/view",downloadLink:"https://drive.google.com/uc?export=download&id=1fy2V8oIqQQ2_Z8M7Dc9Xhexv8GArjmkB"},
    { title: "Kuka Leher De Amar Nayak", author: "Suwaran Singh Virk", cover: "covers/", rating: 4.2, category: "Kuka Leher", description: "Sikh History" ,link:"https://drive.google.com/file/d/1yyhpGEro1k089nPVqPvB8EiDMi229MoY/view",downloadLink:"https://drive.google.com/uc?export=download&id=1yyhpGEro1k089nPVqPvB8EiDMi229MoY"},
    { title: "Pratham Bhartiya", author: "Sri Satguru Jagjit Singh Ji Maharaj", cover: "covers/", rating: 4.2, category: "Sri Satguru Jagjit Singh Ji", description: "Sikh History" ,link:"https://drive.google.com/file/d/1c168wgwYfORltQ3ADRCTCsyfVsqTh538/view",downloadLink:"https://drive.google.com/uc?export=download&id=1c168wgwYfORltQ3ADRCTCsyfVsqTh538"},
    { title: "Raikot Episode (Martyrs Of Freedom Struggle)", author: "Jaswinder Singh, Historian", cover: "covers/", rating: 4.2, category: "Namdhari", description: "Sikh History" ,link:"https://drive.google.com/file/d/1LLmXEKsRn_2qJPzFY54ixbxjQ8aa9pP6/view",downloadLink:"https://drive.google.com/uc?export=download&id=1LLmXEKsRn_2qJPzFY54ixbxjQ8aa9pP6"},
    { title: "The Revolutionary Baba Ram Singh Ji Namdhari", author: "Kehar Singh Matharu", cover: "covers/", rating: 4.2, category: "Sri Satguru Ram Singh Ji", description: "Sikh History" ,link:"https://drive.google.com/file/d/1jVhgeuVeXOUXEh84Gqgu-aBXmpxzAmDq/view",downloadLink:"https://drive.google.com/uc?export=download&id=1jVhgeuVeXOUXEh84Gqgu-aBXmpxzAmDq"},
    { title: "Sikh Itihaas Te Kuke", author: "Amar Bharti", cover: "covers/", rating: 4.2, category: "Sikh", description: "Sikh History" ,link:"https://drive.google.com/file/d/1HKb_smyW5a0zQMTXRi2Al3X8URv0Nhu9/view",downloadLink:"https://drive.google.com/uc?export=download&id=1HKb_smyW5a0zQMTXRi2Al3X8URv0Nhu9"},
    { title: "The Namdhari Sikhs", author: "Sant Singh", cover: "covers/", rating: 4.2, category: "Namdhari", description: "Sikh History" ,link:"https://drive.google.com/file/d/1iezvqTREfA9fygckAtNbIuCOukIwZ9Bx/view",downloadLink:"https://drive.google.com/uc?export=download&id=1iezvqTREfA9fygckAtNbIuCOukIwZ9Bx"},
    { title: "Nanak Raj Chalaya", author: "Pritam Singh Kavi", cover: "covers/", rating: 4.2, category: "Sri Guru Nanak Dev Ji", description: "Sikh History" ,link:"https://drive.google.com/file/d/1bXYAtHGTy69Rbk-eCFVL3PJjpwXDI4xK/view",downloadLink:"https://drive.google.com/uc?export=download&id=1bXYAtHGTy69Rbk-eCFVL3PJjpwXDI4xK"},
    { title: "Bahut Upma Thor Kahi", author: "Surinder Kaur 'Sinder'", cover: "covers/", rating: 4.2, category: "Sri Satguru Jagjit Singh Ji", description: "Sikh History" ,link:"https://drive.google.com/file/d/12labRUjOX804jFmrgB2WceO2BG75cSii/view",downloadLink:"https://drive.google.com/uc?export=download&id=12labRUjOX804jFmrgB2WceO2BG75cSii"},
    { title: "Kaav Pushpaanjli", author: "Jaswant Singh Mst", cover: "covers/", rating: 4.2, category: "Sri Satguru Ram Singh Ji", description: "Sikh History" ,link:"https://drive.google.com/file/d/1jDciKmEuNLwmIy5nEw2ynI9-P6Wqae1G/view",downloadLink:"https://drive.google.com/uc?export=download&id=1jDciKmEuNLwmIy5nEw2ynI9-P6Wqae1G"},
    { title: "Maatawan", author: "Nihal Singh", cover: "covers/", rating: 4.2, category: "Namdhari", description: "Sikh History" ,link:"https://drive.google.com/file/d/12WGaa3LrTIZk65_4xipQLmJN_DFaa_0_/view",downloadLink:"https://drive.google.com/uc?export=download&id=12WGaa3LrTIZk65_4xipQLmJN_DFaa_0_"},
    { title: "Namdharis (The Freedom Fighter)", author: "Kuka Martyrs Memorial Trust", cover: "covers/", rating: 4.2, category: "Kuka Leher", description: "Sikh History" ,link:"https://drive.google.com/file/d/1AHWfbshj87px4-8z7mEs2pKQO4B44uSE/view",downloadLink:"https://drive.google.com/uc?export=download&id=1AHWfbshj87px4-8z7mEs2pKQO4B44uSE"},
    { title: "Namdharis (The Freedom Fighter)", author: "Kuka Martyrs Memorial Trust", cover: "covers/", rating: 4.2, category: "Namdhari", description: "Sikh History" ,link:"https://drive.google.com/file/d/1AHWfbshj87px4-8z7mEs2pKQO4B44uSE/view",downloadLink:"https://drive.google.com/uc?export=download&id=1AHWfbshj87px4-8z7mEs2pKQO4B44uSE"},
    { title: "Sikhism", author: "Editor - W.H. McLeod", cover: "covers/", rating: 4.2, category: "Sikh", description: "Sikh History" ,link:"https://drive.google.com/file/d/1_moVCHi5MXPYuqtEa7REjWbe3SPYKuvO/view",downloadLink:"https://drive.google.com/uc?export=download&id=1_moVCHi5MXPYuqtEa7REjWbe3SPYKuvO"},
    { title: "Waryam 1976", author: "Jagdish Singh", cover: "covers/", rating: 4.2, category: "Namdhari", description: "Sikh History" ,link:"https://drive.google.com/file/d/1m9ek68NpVrZqOSe6_9HdM7tTawQndhFC/view",downloadLink:"https://drive.google.com/uc?export=download&id=1m9ek68NpVrZqOSe6_9HdM7tTawQndhFC"},
    { title: "Namdhari Sidhaant Prichay", author: "Sant Nidhan Singh Aalim", cover: "covers/", rating: 4.2, category: "Namdhari", description: "Sikh History" ,link:"https://drive.google.com/file/d/16BGP1zaVBVNTGuAu_2QMBOaDX-yTDVUI/view",downloadLink:"https://drive.google.com/uc?export=download&id=16BGP1zaVBVNTGuAu_2QMBOaDX-yTDVUI"},
    { title: "Sri Maharaj Jang Singh Ji", author: "Jathedaar Surain Singh", cover: "covers/", rating: 4.2, category: "Sri Satguru Partap Singh Ji", description: "Sikh History" ,link:"https://drive.google.com/file/d/1p07hJ2UAQsxlK61464PQfFUJtFIMReI-/view",downloadLink:"https://drive.google.com/uc?export=download&id=1p07hJ2UAQsxlK61464PQfFUJtFIMReI-"},
    { title: "Sri Satguru Ram Singh Ji", author: "Publisher-M. Balwant Singh", cover: "covers/", rating: 4.2, category: "Sri Satguru Ram Singh Ji", description: "Sikh History" ,link:"https://drive.google.com/file/d/1fSj8aB5R0GlrbqHxKkmhu4H0c6couYln/view",downloadLink:"https://drive.google.com/uc?export=download&id=1fSj8aB5R0GlrbqHxKkmhu4H0c6couYln"},
    { title: "The Namdhari Sikhs", author: "Mrs. Beant Kaur", cover: "covers/", rating: 4.2, category: "Namdhari", description: "Sikh History" ,link:"https://drive.google.com/file/d/1vkAICv0bpTBa4HDNMIyErQKTCqhc_G96/view",downloadLink:"https://drive.google.com/uc?export=download&id=1vkAICv0bpTBa4HDNMIyErQKTCqhc_G96"},
    { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    // { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    // { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    // { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    // { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    // { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    // { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    // { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    // { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    // { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    // { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    // { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    // { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    // { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    // { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    // { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    // { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    // { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    // { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    // { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    // { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    // { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    // { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    // { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    // { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    // { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    // { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    // { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    // { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    // { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    // { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    // { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    // { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    // { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    // { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    // { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    // { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    // { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    // { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    // { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    // { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    // { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    // { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    // { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    // { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    // { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    // { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    // { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    // { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    // { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    // { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    // { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    // { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    // { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    // { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    // { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    // { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    // { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    // { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    // { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    // { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    // { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    // { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    // { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    // { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    // { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    // { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    // { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    // { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    // { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    // { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    // { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    // { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    // { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    // { title: "", author: "", cover: "covers/", rating: 4.2, category: "", description: "Sikh History" ,link:"",downloadLink:"https://drive.google.com/uc?export=download&id="},
    
   

];

async function addBooks() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('✅ Connected to MongoDB');
        
        await Book.deleteMany({});
        console.log('🗑️ Cleared existing books');
        
        const result = await Book.insertMany(books);
        console.log(`✅ Added ${result.length} books to database`);
        
        const count = await Book.countDocuments();
        console.log(`📚 Total books in database: ${count}`);
        
    } catch (error) {
        console.error('❌ Error:', error.message);
    } finally {
        await mongoose.connection.close();
        console.log('🔌 Connection closed');
        process.exit(0);
    }
}

addBooks();




