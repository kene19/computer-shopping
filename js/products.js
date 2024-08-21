export let kanu = [
    {
        Name: "DELL Inspiron",
        image: 'photo/img1.jpg',
        Price: 75_000,
        category: "higer_price",
        prvprice:80000
        
    }, {
        Name: "DELL Precision",
        image: 'photo/img2.jpg',
        Price: 80_000,
        category: "higer_price",
        prvprice:85000
        
    }
    , {
        Name: "MSK KATANA",
        image: 'photo/img3.jpg',
        Price: 155000,
        category: "higer_price",
        prvprice:170000
        
    }
    , {
        Name: "ASUS TUF 15",
        image: 'photo/img4.jpg',
        Price: 57000,
        category: "medium_price",
        prvprice:60000
        
    }, {
        Name: "LENOVO ThinkPad 11e",
        image: 'photo/img5.jpg',
        Price: 14500,
        category: "low_price",
        prvprice:16000
        
    }
    , {
        Name: "Hp pavilion",
        image: 'photo/img6.jpg',
        Price: 40000,
        category: "medium_price",
        prvprice:50000
        
    }
    , {
        Name: "OMEN",
        image: 'photo/img7.jpg',
        Price: 85000,
        category: "higer_price",
        prvprice:90000
        
    }
    , {
        Name: "MSI RAIDER GE76",
        image: 'photo/img8.jpg',
        Price: 275000,
        category: "higer_price",
        prvprice:300000
        
    }
    , {
        Name: "HP Pavilion",
        image: 'photo/img9.jpg',
        Price: 69999,
        category: "higer_price",
        prvprice:80000
        
    }, {
        Name: "HP X360",
        image: 'photo/img10.jpg',
        Price: 16500,
        category: "low_price",
        prvprice:20000
        
    }
    , {
        Name: "HP elite book",
        image: 'photo/img11.jpg',
        Price: 47000,
        category: "medium_price",
        prvprice:50000
        
    }
    , {
        Name: "Hp slim elitbook",
        image: 'photo/img12.jpg',
        Price: 26000,
        category: "medium_price",
        prvprice:30000
        
    }
    , {
        Name: "Hp probook",
        image: 'photo/img13.jpg',
        Price: 25000,
        category: "low_price",
        prvprice:30000
        
    }
    , {
        Name: "Hp elitbook",
        image: 'photo/img14.jpg',
        Price: 46000,
        category: "medium_price",
        prvprice:50000
        
    }
    , {
        Name: "slim Hp elitbook",
        image: 'photo/img15.jpg',
        Price: 40000,
        category: "medium_price",
        prvprice:50000
        
    }
    , {
        Name: "slim Hp pavilion 2023",
        image: 'photo/img16.jpg',
        Price: 57000,
        category: "medium_price",
        prvprice:60000
        
    }
    , {
        Name: "Hp slim elitbook",
        image: 'photo/img17.jpg',
        Price: 25000,
        category: "low_price",
        prvprice:30000
        
    }
    , {
        Name: "HP x360",
        image: 'photo/img18.jpg',
        Price: 79000,
        category: "higer_price",
        prvprice:90000
        
    }
    , {
        Name: "HP 2024",
        image: 'photo/img19.jpg',
        Price: 59500,
        category: "higer_price",
        prvprice:70000
        
    }
    , {
        Name: "Lenove ideapad Chromebook",
        image: 'photo/img20.jpg',
        Price: 12500,
        category: "low_price",
        prvprice:15000
        
    }
    , {
        Name: "Dell precision",
        image: 'photo/img21.jpg',
        Price: 90000,
        category: "higer_price",
        prvprice:100000
        
    }
    , {
        Name: "Lenovo slim",
        image: 'photo/img22.jpg',
        Price: 77000,
        category: "higer_price",
        prvprice:80000
        
    }
    , {
        Name: "HP slim",
        image: 'photo/img23.jpg',
        Price: 31500,
        category: "medium_price",
        prvprice:40000
        
    }
    , {
        Name: "HP Elitbook",
        image: 'photo/img24.jpg',
        Price: 37500,
        category: "medium_price",
        prvprice:40000
        
    }
]

export let man = [...new Set(kanu.map((i) => { return i }))]
