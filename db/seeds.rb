# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Manufacturer.destroy_all
Model.destroy_all
Vehicle.destroy_all

 @manufacturer = Manufacturer.create!(name: "Audi") 
 @manufacturer = Manufacturer.create!(name: "Chrysler")
 @manufacturer = Manufacturer.create!(name: "Tesla")
 @manufacturer = Manufacturer.create!(name: "Hennessey")
 @manufacturer = Manufacturer.create!(name: "Toyota")
 @manufacturer = Manufacturer.create!(name: "Honda")
 @manufacturer = Manufacturer.create!(name: "Subaru")
 @manufacturer = Manufacturer.create!(name: "Nissan")
 @manufacturer = Manufacturer.create!(name: "Mazada")
 @manufacturer = Manufacturer.create!(name: "Mitsubishi")
 @manufacturer = Manufacturer.create!(name: "Lexus")
 @manufacturer = Manufacturer.create!(name: "Acura")
 @manufacturer = Manufacturer.create!(name: "Maybach")
 @manufacturer = Manufacturer.create!(name: "Porsche")
 @manufacturer = Manufacturer.create!(name: "Mercedes-Benz")
 @manufacturer = Manufacturer.create!(name: "BMW")
 @manufacturer = Manufacturer.create!(name: "Rolls-Royce")
 @manufacturer = Manufacturer.create!(name: "Bentley")
 @manufacturer = Manufacturer.create!(name: "Land-Rover")
 @manufacturer = Manufacturer.create!(name: "Dodge")

 @model = Model.create!(name:"AudiR8" , manufacturer: @manufacturer)
 @model = Model.create!(name:"Chrysler 300", manufacturer: @manufacturer)
 @model = Model.create!(name:"Tesla Model X" , manufacturer: @manufacturer)
 @model = Model.create!(name:"Venom GT" , manufacturer: @manufacturer)
 @model = Model.create!(name:"MK4" , manufacturer: @manufacturer)
 @model = Model.create!(name:"s2000" , manufacturer: @manufacturer)
 @model = Model.create!(name:"Impreza WRX Hatchback" , manufacturer: @manufacturer)
 @model = Model.create!(name:"Skyline GTR R34" , manufacturer: @manufacturer)
 @model = Model.create!(name:"Miata" , manufacturer: @manufacturer)
 @model = Model.create!(name:"Lancer Evolution" , manufacturer: @manufacturer)
 @model = Model.create!(name:"LS 400" , manufacturer: @manufacturer)
 @model = Model.create!(name:"Mercedes-Maybach S 650 Sedan" , manufacturer: @manufacturer)
 @model = Model.create!(name:"911 GT3 RS" , manufacturer: @manufacturer)
 @model = Model.create!(name:"M8 competition" , manufacturer: @manufacturer)
 @model = Model.create!(name:"Cullinan" , manufacturer: @manufacturer)
 @model = Model.create!(name:"Flying Spur" , manufacturer: @manufacturer)
 @model = Model.create!(name:"Range Rover" , manufacturer: @manufacturer)
 @model = Model.create!(name:"Demon" , manufacturer: @manufacturer)

 Vehicle.create!(color:"Grey", engine:"5.2 L V10", transmission:"7-speed automatic", year:2020, model: @model)
 Vehicle.create!(color:"Blue", engine:"5.7 L V8", transmission:"8-speed automatic", year:2020, model: @model)
 Vehicle.create!(color:"Red", engine:"305 to 351 mi battery-only", transmission:"1-speed automatic", year:2020, model: @model)
 Vehicle.create!(color:"Grey", engine:"427 cu in (7.0 L) twin-turbocharged LS7 V8", transmission:"6-speed Ricardo manual", year:2012, model: @model)
 Vehicle.create!(color:"Black", engine:"2JZ 3.0-liter engine", transmission:"V160 Getrag 6 speed manual", year:1998, model: @model)
 Vehicle.create!(color:"Yellow", engine:"2.2 L 4-cylinder", transmission:"6-speed manual", year:2009, model: @model)
 Vehicle.create!(color:"Blue", engine:"2.5 L 4-cylinder", transmission:"6-speed manual", year:2014, model: @model)
 Vehicle.create!(color:"Grey", engine:"2.6 L twin-turbocharged RB26DETT", transmission:"6-speed Getrag 233 manual", year:1998, model: @model)
 Vehicle.create!(color:"Red", engine:"1.8 L 4-cylinder", transmission:"5-speed manual", year:1995, model: @model)
 Vehicle.create!(color:"White", engine:"2.0 L turbocharged  engine", transmission:"5-speed manual", year:2000, model: @model)
 Vehicle.create!(color:"White", engine:"4.0 L V8", transmission:"5-speed automatic", year:2000, model: @model)
 Vehicle.create!(color:"Black", engine:"6.0L V12 biturbo", transmission:"7G-TRONIC 7-speed automatic", year:2020, model: @model)
 Vehicle.create!(color:"Lime Green", engine:"4.0-liter Flat Six", transmission:"7-Speed Dual Clutch", year:2019, model: @model)
 Vehicle.create!(color:"Black", engine:"4.4 L V8", transmission:"8-speed automatic", year:2020, model: @model)
 Vehicle.create!(color:"Grey", engine:"6.8 L V12", transmission:"8-speed automatic", year:2020, model: @model)
 Vehicle.create!(color:"Blue", engine:"6.0 L V12", transmission:"8-speed automatic", year:2020, model: @model)
 Vehicle.create!(color:"Sky-Blue", engine:"3.0 L V6 diesel", transmission:"8-speed automatic", year:2020, model: @model)
 Vehicle.create!(color:"Red", engine:"6.2 L V8", transmission:"8-speed automatic", year:2020, model: @model)

 # url1 'https://www.topgear.com/sites/default/files/styles/large/public/cars-car/carousel/2018/11/a1813694_large.jpg?itok=L-V04Nmn'
 # url2 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-chrysler-300-mmp-1-1567716242.jpg?crop=0.893xw:1.00xh;0.0545xw,0&resize=640:*'
 # url3 'https://www.gannett-cdn.com/-mm-/4a37f992e82f9c3fac5be6741da947c5908daa8b/c=0-0-4032-2268/local/-/media/2017/11/08/DetroitNews/B99594850Z.1_20171108180258_000_G781NR6QM.1-0.jpg?width=3200&height=1680&fit=crop'
 # url4 'https://www.venomgt.com/wp-content/uploads/2014/02/Hennessey_Venom_GT_270.4_mph_KSC_800px-09.jpg'
 # url5 'https://live.staticflickr.com/1800/44059825941_d9ca11208a_b.jpg'
 # url6 'https://the-drive.imgix.net/https%3A%2F%2Fapi.thedrive.com%2Fwp-content%2Fuploads%2F2020%2F05%2F2008_honda_s2000_cr_1586810906f66e7dff9f98764da2008-Honda-S2000-CR-8S002212-019.jpeg%3Fquality%3D85?w=1440&auto=compress%2Cformat&ixlib=js-1.4.1&s=f9f87eaf0b2f4b36bef5be2d97f9972a'
 # url7 'https://i.ebayimg.com/00/s/NTc2WDEwMjQ=/z/Jn0AAOSwSwNbR7Rk/$_86.JPG'
 # url8 'https://www.rightdrive.ca/wp-content/uploads/2015/07/skyline-gtr-r34-6.jpg'
 # url9 'https://i.pinimg.com/originals/b6/a4/46/b6a446b772930b49e2962c4ed90d6c18.jpg'
 # url10 'https://www.rpw.com.au/rpwwebsite/wp-content/uploads/2016/01/Mitsubishi_Lancer_Evolution_VI_CP9A_3.jpg'
 # url11 'https://d32c3oe4bky4k6.cloudfront.net/-/media/uscamediasite/images/story-images/2019/09/12/rg-1989-lexus-ls-400-1.ashx?modified=20190911212939'
 # url12 'https://robbreportedit.files.wordpress.com/2020/06/maybach01.jpg?w=1000'
 # url13 'https://pictures.topspeed.com/IMG/crop/201802/2018-porsche-911-gt3-rs-36_800x0w.jpg'
 # url14 'https://cdn.hiconsumption.com/wp-content/uploads/2020/05/Manhart-MH8-800-BMW-M8-Competition-0-Hero.jpg'
 # url15 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSLsoJRZopWVbydD48aJGMMTPCh9y0CIPlvVxj6pAPZBkQN8sXN'
 # url16 'https://s.aolcdn.com/commerce/autodata/images/USD00BEC111A01300.jpg'
 # url17 'https://cdn.carbuzz.com/gallery-images/1600/616000/300/616327.jpg'
 # url18 'https://the-drive.imgix.net/https%3A%2F%2Fapi.thedrive.com%2Fwp-content%2Fuploads%2F2017%2F06%2Fdodge-demon-challenger-srt-youtube.jpg%3Fquality%3D85?w=1440&auto=compress%2Cformat&ixlib=js-1.4.1&s=399d00b97152db7624f6f177b3263c05'