import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products = [
    {
      query: 'coatedPaper',
      name: 'Coated Paper',
      prefix: '/assets/products',
      desc: `Leading Manufacturers and Exporters of Barrel Kraft Paper, Bio Degradable Cupstock Paper,
       Confectionery Packaging Paper, Cupstock Paper, Food Container Paper, Glassine Paper,
        Oil Resistant Packaging Paper, Seeds Packaging Paper, Soap Stiffener Paper and Sugar
         Sachet Paper from Dewas.`,
      products: [
        {
          name: 'Barrel Kraft Paper',
          businessType: 'Manufacturer, Exporter, Supplier',
          buyerLocation: 'Anywhere in India and abroad',
          description: `Paper Barrels are very popular products in chemicals storage & packaging industry. 
            These Barrels are made of PE Coated Papers as outer and Inner lining in Barrel's Body.
            We supply white and Brown color PE Coated Papers in different GSM strucrure and Different 
            BF parameters of Paper. This Product has glossy PE coating`,
          img: '/coated-papers/barrelcraft.jpeg',
        },
        {
          name: 'Bio Degradable Cupstock Paper',
          businessType: 'Manufacturer, Exporter, Supplier',
          buyerLocation: 'Anywhere in India and abroad',
          description: ` This is the step towards sustainability and saving earth. 
          Replacement of Plastic Cups and PE Coated Paper Cups is Bio Degradable Paper Cups. 
          This Paper is fully compostable and Recyclable and Bio Degradable.`,
          img: '/coated-papers/biodegradable.jpeg',
        },
        {
          name: 'Confectionery Packaging Paper',
          businessType: 'Manufacturer, Supplier',
          buyerLocation: 'Anywhere in India and abroad',
          description: `We produces PE Coated Chromo Art Paper and PE Coated Poster Paper for making 
          Pouches for Packing of confectionery and grocerry. 
          These Papers are printable by Flexo, Offset or Rotogravure technology.`,
          img: '/coated-papers/confectionary.jpeg',
        },
        {
          name: 'Cupstock Paper',
          businessType: 'Manufacturer, Exporter, Supplier',
          buyerLocation: 'Anywhere in India and abroad',
          description: `AARADHYA DISPOSAL INDUSTRIES PVT LTD are leading Manufacturer and Exporter of 
          PE Coated Cup Stock Paper from INDIA. High Quality FSC Certified Paper and Virgin LDPE Coated 
          Paper are Best Solution for making Paper Cups and Tubs. This Paper is available from 150-350 
          GSM range with one and two side PE coating. With High Speed Coating Lines, Slitting, Sheet 
          cutting & Flexo Printing we have capcity of supplying 5000 Metric Tons Paper Per Month.`,
          img: '/coated-papers/cupstock.jpeg',
        },
        {
          name: 'Food Container Paper',
          businessType: 'Manufacturer, Exporter, Supplier',
          buyerLocation: 'Anywhere in India and abroad',
          description: `Food Packaging Paper includes many kind of Paper Boards both PE coated and 
          Un Coated for makinng Food containers and Boxes. These Boxes can be used for packing fast 
          food as burgers, sandwiches etc and also for Ice Cream Packs and Cups.`,
          img: '/coated-papers/food-contaianer.jpeg',
        },
        {
          name: 'Glassine Paper',
          businessType: 'Manufacturer, Exporter, Supplier',
          buyerLocation: 'Anywhere in India and abroad',
          description: `We supply both un coated and PE coated glassine / OLB Papers for food and 
          farma industry. These are high quality super glossy Papers with superior printability.`,
          img: '/coated-papers/glassine.jpeg',
        },
        {
          name: 'Oil Resistant Packaging Paper',
          businessType: 'Manufacturer, Exporter, Supplier',
          buyerLocation: 'Anywhere in India and abroad',
          description: `Oil Resistant papers are MG Tissue Papers and Glassine Papers that are used for 
          wrapping food products. These are in range from 19 gsm to 50 gsm. Oil resistant Papers are 
          available in Reel and Sheet form.`,
          img: '/coated-papers/oil-resistant.jpeg',
        },
        {
          name: 'Seeds Packaging Paper',
          businessType: 'Manufacturer, Exporter, Supplier',
          buyerLocation: 'Anywhere in India and abroad',
          description: `We produce PE Coated Chromo Art Paper and PE Coated Poster Paper for Printing 
          and making Pouches for Packing of Seeds and Granules. These Papers are printable by Flexo, 
          Offset or Rotogravure technology.`,
          img: '/coated-papers/seed-packaging.jpeg',
        },
        {
          name: 'Soap Stiffener Paper',
          businessType: 'Manufacturer, Exporter, Supplier',
          buyerLocation: 'Anywhere in India and abroad',
          description: `Soap Stiffner Paper are used for protection of Soap from Moisture and Fungus. 
          AARADHYA DISPOSAL INDUSTRIES PVT LTD are leading Manufacturer of soap stiffener Paper board. 
          We are manufacturing & exporting PE Coated and Uncoated Stiffner Paper in Jumbo Reels.`,
          img: '/coated-papers/soap-stiffening.jpeg',
        },
        {
          name: 'Sugar Sachet Paper',
          businessType: 'Manufacturer, Exporter, Supplier',
          buyerLocation: 'Anywhere in India and abroad',
          description: `We are manufacturing & exporting PE Coated & Printed Papers for Packing of Sugar, 
          Salt & Pepper etc in small sachets. This is the regulary used product in our daily life for small,
           convieninet and safe Packing of these Products to protect them from moisture. This Paper is 
           available in Jumbo Reels, Slitted small width Reels and Sheets.`,
          img: '/coated-papers/sugar.jpeg',
        },
      ],
    },
    {
      query: 'coatedRoll',
      name: 'PE Coated Bottom Rolls',
      prefix: '/assets/products',
      desc: `Leading Manufacturers and Exporters of PE Coated Bottom Rolls and PE Coated Paper Rolls from Dewas.`,
      products: [
        {
          name: 'PE Coated Bottom Rolls',
          businessType:
            'Manufacturer, Exporter, Supplier, Retailer, Wholesaler',
          buyerLocation: 'Anywhere in India and abroad',
          description: `We offer a wide collection of poly coated paper or PE coated Bottom Roll that are used 
          for Making Bottom of paper Cups. our Customise range of poly coated paper bottom rolls are 
          available in require width.`,
          details: {
            Type: 'Pe Coated Paper',
            Thickness: '1.0 to 3.0mm',
            Color: 'White',
            Feature: 'Greaseproof, Heat Resistant, Moisture Proof, Waterpoof',
            'Industrial Use': 'Cup Making & Pounching',
            Coating: 'Coated',
            GSM: '140-320',
          },
          img: '/pe-coated/pe-coated-bottom.jpeg',
        },
        {
          name: 'PE Coated Paper Rolls',
          businessType:
            'Manufacturer, Exporter, Supplier, Retailer, Wholesaler',
          buyerLocation: 'Anywhere in India and abroad',
          description: `We offer a wide collection of poly coated paper or PE coated paper that are used 
          for Making paper Cups, pouches, lived cartons, soap wrapper, soap stiffener and wrapping labels. 
          Used for heavy-duty applications, our Customise range of poly coated paper are available in rolls
           width, Durable mechanical protection to achieve full cost optimization, 
           available in single/multicolour printed options`,
          details: {
            Thickness: '1.0 to 3.0mm',
            Feature: 'Greaseproof, Moisture Proof, Waterpoof',
            Pattern: 'Plain',
            'Industrial Use': 'Cup Making & Pounching',
            Coating: 'Coated',
            GSM: '50-320',
          },
          img: '/pe-coated/pe-coated-paper-rolls.jpeg',
        },
      ],
    },
    {
      query: 'paperBlank',
      name: 'Paper Cup Blank',
      prefix: '/assets/products',
      products: [
        {
          name: 'Paper Cup Blank',
          businessType:
            'Manufacturer, Exporter, Supplier, Retailer, Wholesaler',
          buyerLocation: 'Anywhere in India and abroad',
          description: `We offer Single Or Double Side PE Coated best quality of Paper Cup Blanks
           & We can print the paper custom disposable paper cup fan/sleeve  according to your 
           requirement. We are offering printed paper cup fans or blanks in very affordable price.`,
          details: {
            Type: 'Printed',
            Material: 'PE Coated Paper',
            Thickness: '1.0 to 3.0mm',
            Feature: 'Disposable, Biodegradable, Eco-Friendly',
            Use: 'Coffee, Food, Ice Cream',
            GSM: '140-320',
            'Water Proof': 'Yes',
          },
          img: '/paper-blanks.jpg',
        },
      ],
    },
    {
      query: 'ripple',
      name: 'Ripple Paper',
      prefix: '/assets/products',
      products: [
        {
          name: 'Ripple Paper',
          businessType:
            'Manufacturer, Exporter, Supplier, Retailer, Wholesaler',
          buyerLocation: 'Anywhere in India and abroad',
          details: {
            Feature: 'Disposable, Biodegradable, Eco-Friendly',
            Use: 'Making Paper Cup',
            GSM: '80-120',
            Size: '150, 200 , 250, 300, 350 ML',
          },
          description: `We offer Ripper Paper in very affordable price.`,
          img: '/ripple.webp',
        },
      ],
    },
  ];

  productsCategory:
    | {
      name: string;
      businessType: string;
      buyerLocation: string;
      description: string;
      img: string;
    }[]
    | undefined;

  productName = '';
  productTitle = '';

  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    document.body.scrollTop = 0;
    this.route.params.subscribe((param) => {
      const selectedProductCategory = this.products.find(
        (product) => product.query === param['productName']
      );
      this.productsCategory = selectedProductCategory?.products;
      this.productName = selectedProductCategory?.name ?? '';
      this.productTitle = selectedProductCategory?.desc ?? '';
    });
  }
}
