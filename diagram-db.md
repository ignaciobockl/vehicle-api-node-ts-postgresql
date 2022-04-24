Table vehicles {
  id int [pk, increment] // auto-increment
  brand_id int
  type_of_vehicle type_of_vehicle
  image string
}

Table brands {
  id int [pk, increment] // auto-increment
  name string
  description string
  model_id int
}

Table models {
  id int [pk, increment] // auto-increment
  name string
  description string
  version_id int
}

Table model_version {
  id int [pk, increment] // auto-increment
  version string
  technical_characteristics_id int
  origin string
  data_sheet_id int
  year_of_production string
  article_id int
}

Table technical_characteristics {
  id int [pk, increment] // auto-increment
  motor_id int
  gearbox string
  bodywork string
  suspension string
  brakes string
  direction string
  wheels_and_tires string
}

Table motor {
  id int [pk, increment] // auto-increment
  fuel_type fuel_type
  traction traction
  cylinders_and_configuration cylinders_and_configuration
  displacement string
  injection_type injection_type
  power string
  torque string
  additional_information string
}

Table data_sheet {
  id int [pk, increment] // auto-increment
  maximum_speed string
  aceleration array
  fuel_consumption array
  braking_distance array
  note string
  ratings object
}

Table articles {
  id int [pk, increment] // auto-increment
  notes_id int
}

Table article_notes {
  id int [pk, increment] // auto-increment
  title string
  description string
  images string
}

Enum type_of_vehicle {
  urban [note: 'In the urban segment we can find a wide variety of models of different sizes. In this group we could include everything from micro-cars or small utility vehicles such as the smart fotwo and the Tata Nano to larger vehicles such as the SEAT Mii, the Toyota Aygo, the Hyundai i10, the Kia Picanto or the Peugeot 108. Below these would already be the cars without a license. As their name suggests, they are characterized by their small size and are designed to circulate around the city, since they have some virtues such as maneuverability, ease of parking or low consumption. More and more brands abandon diesel mechanics in these models and practically all of them are already offered only in gasoline versions. They are what is known as segment A - approximately 3.3 to 3.7 meters in length.']
  subcompact [note: 'These types of cars can have three, four or five doors, depending a bit on the design of their bodywork. They are designed so that four passengers can travel comfortably and correspond to what we know as segment B -approximately 3.9 to 4.3 meters in length-. There are many examples, such as Renault Captur, Opel Corsa, Ford Fiesta, Kia Rio, Peugeot 2008... It is important to point out that some of these models are also offered in sedan, crossover (also known as B-SUV) or minivan bodies, for What must be taken into account is that there are different types of cars within the same segment.']
  hatchback_compact [note: 'We are going to take the word hatchback with tweezers, because this term refers, in a literal sense, to that car made up of two different spaces: that of the passengers and that of the cargo or trunk space, which is accessed from a gate. According to this, a hatchback can cover all types of vehicles with three and five doors, but this denomination is popularly used for compact models. By compact I mean what we know as the C-segment -approximately 4.2 to 4.5 meters in length-, that is, Opel Astra, SEAT Leon, Subaru Impreza, Kia Ceed, Ford Focus... the list is really extensive and the very varied body options, as there are sedans, C-SUV or minivans.']
  familiar [note: 'They are those passenger cars derived from compacts, sedans or saloons with a five-door body and a raised roof, in order to expand the cargo compartment, that is, they have a family body or what we would commonly call ranchera, Tourer, Break... In the familiar there are cars from all segments, so lets think of a SEAT León ST, a Hyundai i30 CW or a Škoda Superb Combi. They have two volumes, like the SUVs -hood and passenger compartment- and can wear a normal or jacket aesthetic, just remember examples such as the Mercedes-Benz E-Class AllTerrain or the Audi A6 Allroad. Nor can we forget the Shooting Brake, such as the Mercedes-Benz CLA or the Porsche Panamera Sport Turismo, although on many occasions this type of model is taken from the family denomination.']
  sedan [note: 'Sedans often tend to be referred to as sedans and vice versa, but they are not really the same, since a sedan is a three-volume car in which access to the passenger compartment is not allowed from the cargo compartment, since the lid from the trunk it separates them. They are what is known as four-door models where the rear glass is not included in the trunk lid. For example, the Audi A3 sedan.']
  berlina [note: 'They are passenger cars with three volumes that have three completely different parts: hood, passenger compartment and trunk. Unlike the sedans, the boot lid does include the rear window, so there is access to the cargo space from the cabin. We can find them in different segments depending on their size: Segment D or saloon: they measure between approximately 4.5 and 4.8 meters in length and are oriented towards the road, as they offer great comfort and good cargo space. Some examples are the Ford Mondeo, the Audi A4 or the Mazda6. E-segment or medium saloon: they measure between approximately 4.85 and 4.95 meters in length and, in Europe, they are usually high-end vehicles or what are known as executive cars because the potential buyer expects that they will be granted -usually - a remarkable social status. Hence, the vast majority are high-end models such as Lexus, BMW, Jaguar, Maserati, Infiniti... F-segment, large sedans or representative sedans: they are the height of luxury, the brands flagships. They measure between approximately 5.10 and 5.15 meters in length, although they are also offered with a long body –Long Wheel Base– that can even exceed 5.25 metres. They are designed to be driven by a driver, so they enjoy all kinds of luxuries in the rear seats. Take an Audi A8L, a Rolls-Royce Phantom or a Range Rover LWB.']
  convertible [note: 'You have probably noticed that when talking about convertible vehicles, manufacturers use different words: cabriolet, targa, roadster, spyder, convertible... Why so many names? Do they really mean the same thing? This is like the world of superheroes, with a cape or without it? Well, marketers can say mass, but the reality is that the differences between all of them were conscientiously thought out and based on production costs. You can read them all in the linked article.']
  coupe [note: 'Depending on the manufacturer, we can find two-door or four-door coupes, just think of a BMW 2 Series or a four-door Mercedes-AMG GT Coupe. They are characterized by their sloping roof that gives them more style and in this group we can find everything from compact to large sports cars that can boast design and powerful engines. Depending on the angle that the rear window forms with the trunk or engine lid, they can be fastback or liftback (two volumes with the trunk/engine lid included) like the Hyundai i30 Fastback, or notchback (three volumes), although it is true that this last denomination we will rarely read it. In this group of vehicles are the Audi Sportbacks.']
  muscle_car [note: 'We have all used the term muscle car on some occasion to refer to the typical American rear-wheel drive car with a powerful V8 block hidden in its guts and high doses of power, but perhaps the word pony car is much more appropriate in many of the cases, because they are not the same. This is a debate that has been going on for several years on the net and, as I explained to you in more detail what the differences between the two terms are, I will refer to that post that you can read at the link. Among them we see the Ford Mustang, the Chevrolet Camaro, the Dodge Challenger...']
  hypercar_supercar_sportscars [note: 'Within this type of vehicle we find various types of bodies, but all of them are characterized by equipping really attractive designs, very powerful engines, a maximum speed that exceeds 250 km/h and incredible traction focused on giving you greater performance on the track. They are usually coupés, convertibles and two-seaters, such as the Mercedes-AMG GT R, the Pagani Zonda, the Bugatti Chiron... although in this group we can also include the GT or Gran Turismo, which tend to be somewhat more expensive, larger and heavier than the conventional sports. In this group is the fastest car in the world. Do you know which one it is?']
  mega_gt [note: 'Despite being a four-seater, the Koenigsegg Gemera easily outperforms most two-seat megacars, both combustion and electric. Even so, according to the company itself, the focus of the Gemera is family trips at full speed and with maximum safety and comfort. Although it is not at all frequent to come across new terminologies and definitions, Koenigsegg has invented the Mega GT. With its 1.27 megawatts of power and 3,500 Nm of torque, the Gemera is capable of covering 0 to 100 km/h in 1.9 seconds and reaching 400 km/h in less than 20 seconds.']
  minivan [note: 'They are also known as MPV (Multi Purpose Vehicle) and are the segment most affected by the SUV fever. Its interior space integrates in a single volume the engine -which protrudes very little in front of the front axle and is mounted higher and more inclined than in a car-, the passenger compartment and the cargo space. Their common denominator is family use and leisure, offering versions of five, seven and up to nine seats with various body sizes. Among the most common examples are the Renault Scénic, the Mercedes-Benz V-Class, the Opel Vivaro Tourer, the Peugeot Traveller... As you can see, some derive from commercial vehicles, so they are also offered in van or van-type bodywork.']
  crossover_suv_offroader [note: 'In recent years, the SUV fever has caused numerous terms to appear on the market that, on many occasions, lead even experts to confusion. Just a few years ago, we all understood by off-road or 4 × 4 a vehicle of considerable dimensions, with square shapes, a lousy aerodynamic coefficient, criticizable comfort and an efficiency unable to exceed the Euro 6 regulations. Of course, they were "pots" that they even climbed the walls, but nowadays we can count the old school off road models on the fingers of one hand, and we even have one hand to spare. Instead, we can see a whole cast of attractive SUVs, SUVs and crossovers that captivate users wherever they go. In this link you can find all the differences between the various types of models on the market.']
  commercial [note: 'They are what we usually call vulgarly van. They really are minivans by concept, but they only mount one or two rows of seats, leaving ample cargo space behind the passengers. We can find from light commercial vehicles such as an Opel Corsa Van or a Ford Tourneo to large trucks.']
  motorhome [note: 'They are those vehicles classified by the highway code as a car that includes basic furniture inside, as a house or home, approved to be used as a home during trips. In this way, they provide the two basic means of travel: transportation and accommodation. There are several types and they can be developed on off-road vehicles or large minivans: Camper: technically, we are talking about a vehicle, with a motor or towed by another, conditioned to make life inside it, making the most of the space, which is generally used for camping ; caravan, mobile home; although in a popular way they are what we know as an adapted van that retains the exterior dimensions of those built in series. To this is added the thermal insulation, the furniture and all the necessary systems for life on board. They can be additionally equipped with a raised roof as standard or added later, such as the Volkswagen California or the Mercedes-Class V Marco Polo. Nasturtiums: they are the most common and are characterized in that the habitable cabin is made up of an external element, combined during construction with an engine. Its particularity is the extension of the end of the cabin over the drivers compartment. Integral: The habitable cabin forms a single body with the motor chassis. It is the most luxurious and expensive type, since the entire structure is built to measure using only the engine of the original vehicle from which it derives and we can even see them the size of a bus. Profiled: are those in which the habitable cabin is made up of an external element, assembled in the factory on a chassis-engine. They usually have a lower height than the nasturtiums.']
  pick_up [note: 'Also known as trucks on the other side of the Pond, this type of vehicle usually has great off-road capabilities given its approach to transporting goods. They are essentially characterized by their open cargo area at the rear, very useful for transporting bulky objects. The cargo bed, also called a box or tub, can be covered with a tarpaulin or a fiber or glass structure. Among the best known examples are the Mitsubishi L200, the Toyota Hilux, the Nissan Navara or the legendary Ford F-150 and its powerful Raptor version. They are very popular in the United States.']
  historical_classics [note: 'Classic vehicles are those over 30 years old (previously it was 25 years old). In general, they are usually included in the General Inventory of Movable Property of the Spanish Historical Heritage, vehicles declared of cultural interest or vehicles of special interest. On many occasions they are also considered collectors vehicles, because very limited units have been manufactured or because of the uniqueness of a specific model. Among them are the 10 most expensive cars in history.']
  one_off [note: 'As the good car lover you are, you have probably dreamed of an elite sports car brand manufacturing a unique sports car, just for you. Come on, what has been a one-off. Fortunately or unfortunately, in this world there are quite a few people who could financially afford this whim, but be careful, because getting a brand like Ferrari to manufacture an exclusive unit for you is not as easy as it seems... They are usually very luxurious or high-end sports vehicles. elite, even more exclusive than the limited editions that we sporadically see in brands. Among them we find examples such as the Pagani Zonda MD, Rolls-Royce models, the Koenigsegg Agera RS Gryphon or the Ferrari SP38.']
  limusine [note: 'They are still three-volume passenger cars, but their length is much greater than that of a conventional model, and they can easily reach up to seven or eight meters. They are manufactured in small series and generally on car or SUV bodies, such as the Mercedes-Maybach Pullman, the Hummer H2, the Lincoln Continental...']
}

Enum injection_type {
  carburetor_mechanics
  monopoint_electronics
  multipoint_electronics
  direct_electronic
  indirect_electronic
  dual_injection_electronic
}

Enum cylinders_and_configuration {
  3_cylinders_in_line
  4_cylinders_in_line
  5_cylinders_in_line
  6_cylinders_in_line
  v6_cylinders
  8_cylinders_in_line
  v8_cylinders
  v12_cylinders
}

Enum fuel_type {
  gasoline
  diesel
  alcohol
  hydrogen
  biodiesel
  electric
  methanol
  cng
  glp
}

// relationship
Ref: vehicles.brand_id - brands.id
Ref: brands.model_id < models.id
Ref: models.version_id < model_version.id
Ref: model_version.technical_characteristics_id < technical_characteristics.id
Ref: technical_characteristics.motor_id - motor.id
Ref: model_version.data_sheet_id - data_sheet.id
Ref: model_version.article_id - articles.id
Ref: articles.notes_id < article_notes.id