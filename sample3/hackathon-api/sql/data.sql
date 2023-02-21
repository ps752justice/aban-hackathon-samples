-- Causes

INSERT INTO causes(fa,en,Id) VALUES ('اصابت گلوله','Gunshot',1);
INSERT INTO causes(fa,en,Id) VALUES ('اصابت گلوله به بازو و قلب','Gunshot - Arm & Heart',2);
INSERT INTO causes(fa,en,Id) VALUES ('اصابت گلوله به بالا تنه','Gunshot - Upper Body',3);
INSERT INTO causes(fa,en,Id) VALUES ('اصابت گلوله به پا','Gunshot - Leg',4);
INSERT INTO causes(fa,en,Id) VALUES ('اصابت گلوله به پشت','Gunshot - Back',5);
INSERT INTO causes(fa,en,Id) VALUES ('اصابت گلوله به پشت و سر','Gunshot - Back & Head',6);
INSERT INTO causes(fa,en,Id) VALUES ('اصابت گلوله به پشت و سینه','Gunshot - Back & Chest',7);
INSERT INTO causes(fa,en,Id) VALUES ('اصابت گلوله به پشت یا پا','Gunshot - Back or Leg',8);
INSERT INTO causes(fa,en,Id) VALUES ('اصابت گلوله به پهلو','Gunshot - Kidney',9);
INSERT INTO causes(fa,en,Id) VALUES ('اصابت گلوله به ران','Gunshot - Leg',10);
INSERT INTO causes(fa,en,Id) VALUES ('اصابت گلوله به سر','Gunshot - Head',11);
INSERT INTO causes(fa,en,Id) VALUES ('اصابت گلوله به سر و پا','Gunshot - Head & Leg',12);
INSERT INTO causes(fa,en,Id) VALUES ('اصابت گلوله به سر و گردن','Gunshot - Head & Neck',13);
INSERT INTO causes(fa,en,Id) VALUES ('اصابت گلوله به سر، سینه و شکم','Gunshot - Head, Chest & Stomach',14);
INSERT INTO causes(fa,en,Id) VALUES ('اصابت گلوله به سینه','Gunshot - Chest',15);
INSERT INTO causes(fa,en,Id) VALUES ('اصابت گلوله به سینه و قلب','Gunshot - Chest & Heart',16);
INSERT INTO causes(fa,en,Id) VALUES ('اصابت گلوله به شانه','Gunshot - Shoulder',17);
INSERT INTO causes(fa,en,Id) VALUES ('اصابت گلوله به شکم','Gunshot - Stomach',18);
INSERT INTO causes(fa,en,Id) VALUES ('اصابت گلوله به شکم و پا','Gunshot - Stomach & Leg',19);
INSERT INTO causes(fa,en,Id) VALUES ('اصابت گلوله به شکم، گردن و سینه','Gunshot - Stomach, Neck & Chest',20);
INSERT INTO causes(fa,en,Id) VALUES ('اصابت گلوله به قلب','Gunshot - Heart',21);
INSERT INTO causes(fa,en,Id) VALUES ('اصابت گلوله به قلب و پا','Gunshot - Heart & Leg',22);
INSERT INTO causes(fa,en,Id) VALUES ('اصابت گلوله به قلب و سینه','Gunshot - Heart & Chest',23);
INSERT INTO causes(fa,en,Id) VALUES ('اصابت گلوله به قلب و شکم','Gunshot - Heart & Stomach',24);
INSERT INTO causes(fa,en,Id) VALUES ('اصابت گلوله به گردن','Gunshot - Neck',25);
INSERT INTO causes(fa,en,Id) VALUES ('اصابت گلوله به گردن و شکم','Gunshot - Neck & Stomach',26);
INSERT INTO causes(fa,en,Id) VALUES ('اصابت گلوله به لگن','Gunshot - Pelvis',27);
INSERT INTO causes(fa,en,Id) VALUES ('خفگی با گاز اشک آور','Tear gass',28);
INSERT INTO causes(fa,en,Id) VALUES ('ضرب و جرح توسط نیروهای امنیتی','Assaulted by security forces',29);
INSERT INTO causes(fa,en,Id) VALUES ('اصابت گلوله به سر','Gunshot - Head',30);
INSERT INTO causes(fa,en,Id) VALUES ('اصابت گلوله به سینه','Gunshot - Chest',31);
INSERT INTO causes(fa,en,Id) VALUES ('اصابت گلوله به بازو و قلب','Gunshot - Heart & Arm',32);
INSERT INTO causes(fa,en,Id) VALUES ('اصابت گلوله به بالا تنه','Gunshot - Upper body',33);
INSERT INTO causes(fa,en,Id) VALUES ('اصابت گلوله به سر و گردن','Gunshot - Head & Neck',34);
INSERT INTO causes(fa,en,Id) VALUES ('اصابت گلوله به سر و پا','Gunshot - Head & Leg',35);
INSERT INTO causes(fa,en,Id) VALUES ('اصابت گلوله به سینه و قلب','Gunshot - Chest & Heart',36);
INSERT INTO causes(fa,en,Id) VALUES ('اصابت گلوله به ران','Gunshot - Leg',37);
INSERT INTO causes(fa,en,Id) VALUES ('اصابت گلوله به سر، سینه و شکم','Gunshot - Head & Chest',38);

-- People EN

INSERT INTO
     people_en(
          full_name,
          age,
          date,
          location,
          cause_id,
          thumb_url,
          image_url,
          province_id
     )
VALUES
     (
          'Ebrahim Ketabdar',
          '29',
          '16 Nov 2019',
          'Karaj, Alborz',
          21,
          'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V062_48px.jpg',
          'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V062_large.jpg',
          1
     );

INSERT INTO
     people_en(
          full_name,
          age,
          date,
          location,
          cause_id,
          thumb_url,
          image_url,
          province_id
     )
VALUES
     (
          'Ebrahim Moradi',
          '21',
          '16 Nov 2019',
          'Javanroud, Kermanshah',
          11,
          'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V065_48px.jpg',
          'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V065_large.jpg',
          15
     );

INSERT INTO
     people_en(
          full_name,
          age,
          date,
          location,
          cause_id,
          thumb_url,
          image_url,
          province_id
     )
VALUES
     (
          'Ebrahim Matouri',
          'Unknown',
          '16 Nov 2019',
          'Abadan, Khoozestan',
          7,
          'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V061_48px.jpg',
          'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V061_large.jpg',
          19
     );

INSERT INTO
     people_en(
          full_name,
          age,
          date,
          location,
          cause_id,
          thumb_url,
          image_url,
          province_id
     )
VALUES
     (
          'Ebrahim Mansouri',
          'Unknown',
          '17 Nov 2019',
          'Yazdanshahr, Isfahan',
          1,
          'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V063_48px.jpg',
          'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V063_large.jpg',
          13
     );

INSERT INTO
     people_en(
          full_name,
          age,
          date,
          location,
          cause_id,
          thumb_url,
          image_url,
          province_id
     )
VALUES
     (
          'Ebrahim Mahdipour',
          '50',
          '16 Nov 2019',
          'Andishe, Tehran',
          1,
          'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V064_48px.jpg',
          'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V064_large.jpg',
          29
     );

INSERT INTO
     people_en(
          full_name,
          age,
          date,
          location,
          cause_id,
          thumb_url,
          image_url,
          province_id
     )
VALUES
     (
          'Abolfazl Shabani',
          '17 or 18',
          '16 Nov 2019',
          'Baharestan, Tehran',
          11,
          'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V007_48px.jpg',
          'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V007_large.jpg',
          29
     );

INSERT INTO
     people_en(
          full_name,
          age,
          date,
          location,
          cause_id,
          thumb_url,
          image_url,
          province_id
     )
VALUES
     (
          'Ahad Bashare Doraghi',
          '22',
          '17 Nov 2019',
          'Mahshahr, Khoozestan',
          8,
          'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V009_48px.jpg',
          'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V009_large.jpg',
          19
     );

INSERT INTO
     people_en(
          full_name,
          age,
          date,
          location,
          cause_id,
          thumb_url,
          image_url,
          province_id
     )
VALUES
     (
          'Ehsan Shiri',
          '30-35',
          '17 Nov 2019',
          'Fardis, Alborz',
          18,
          'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V067_48px.jpg',
          'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V067_large.jpg',
          1
     );

INSERT INTO
     people_en(
          full_name,
          age,
          date,
          location,
          cause_id,
          thumb_url,
          image_url,
          province_id
     )
VALUES
     (
          'Ehsan Abdollahnejad',
          '28',
          '16 Nov 2019',
          'Behbahan, Khoozestan',
          15,
          'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V066_48px.jpg',
          'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V066_large.jpg',
          19
     );

INSERT INTO
     people_en(
          full_name,
          age,
          date,
          location,
          cause_id,
          thumb_url,
          image_url,
          province_id
     )
VALUES
     (
          'Unknown',
          'Unknown',
          '18 Nov 2019',
          'Mahshahr, Khoozestan',
          1,
          'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V303_48px.jpg',
          'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V303_large.jpg',
          19
     );

INSERT INTO
     people_en(
          full_name,
          age,
          date,
          location,
          cause_id,
          thumb_url,
          image_url,
          province_id
     )
VALUES
     (
          'Unknown',
          'Unknown',
          '16 or 17 Nov 2019',
          'Mallard, Tehran',
          1,
          'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V292_48px.jpg',
          'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V292_large.jpg',
          29
     );

INSERT INTO
     people_en(
          full_name,
          age,
          date,
          location,
          cause_id,
          thumb_url,
          image_url,
          province_id
     )
VALUES
     (
          'Unknown (Maybe Behrouz Falahi)',
          'Unknown',
          '17 Nov 2019',
          'Boomehen, Tehran',
          1,
          'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V054_48px.jpg',
          'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V054_large.jpg',
          29
     );

INSERT INTO
     people_en(
          full_name,
          age,
          date,
          location,
          cause_id,
          thumb_url,
          image_url,
          province_id
     )
VALUES
     (
          'Vahid Tavasolidoost',
          '48',
          '17 Nov 2019',
          'Shiraz, Fars',
          15,
          'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V294_48px.jpg',
          'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V294_large.jpg',
          7
     );

INSERT INTO
     people_en(
          full_name,
          age,
          date,
          location,
          cause_id,
          thumb_url,
          image_url,
          province_id
     )
VALUES
     (
          'Vahid Damour',
          '30',
          '17 Nov 2019',
          'Mallard, Tehran',
          1,
          'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V293_48px.jpg',
          'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V293_large.jpg',
          29
     );

INSERT INTO
     people_en(
          full_name,
          age,
          date,
          location,
          cause_id,
          thumb_url,
          image_url,
          province_id
     )
VALUES
     (
          'Yasin (Mojtaba) Ramzan Nejad',
          '34',
          '17 Nov 2019',
          'Ghods, Tehran',
          11,
          'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V298_48px.jpg',
          'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V298_large.jpg',
          29
     );

INSERT INTO
     people_en(
          full_name,
          age,
          date,
          location,
          cause_id,
          thumb_url,
          image_url,
          province_id
     )
VALUES
     (
          'Yadollah Haji Taremipour',
          '63 or 64',
          '16 Nov 2019',
          'Shiraz, Fars',
          28,
          'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V295_48px.jpg',
          'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V295_large.jpg',
          7
     );

INSERT INTO
     people_en(
          full_name,
          age,
          date,
          location,
          cause_id,
          thumb_url,
          image_url,
          province_id
     )
VALUES
     (
          'Yaghoub Khosravi',
          'Unknown',
          '16 or 17 Nov 2019',
          'Unknown, Isfahan',
          11,
          'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V296_48px.jpg',
          'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V296_large.jpg',
          13
     );

INSERT INTO
     people_en(
          full_name,
          age,
          date,
          location,
          cause_id,
          thumb_url,
          image_url,
          province_id
     )
VALUES
     (
          'Yaghoub Najafi Babadi',
          '26',
          '17 Nov 2019',
          'Isfahan, Isfahan',
          9,
          'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V297_48px.jpg',
          'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V297_large.jpg',
          13
     );

INSERT INTO
     people_en(
          full_name,
          age,
          date,
          location,
          cause_id,
          thumb_url,
          image_url,
          province_id
     )
VALUES
     (
          'Yousef Albo Ebadi',
          'Unknown',
          '18 Nov 2019',
          'Mahshahr, Khoozestan',
          1,
          'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V300_48px.jpg',
          'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V300_large.jpg',
          19
     );

INSERT INTO
     people_en(
          full_name,
          age,
          date,
          location,
          cause_id,
          thumb_url,
          image_url,
          province_id
     )
VALUES
     (
          'Yousef Khaledi',
          'Unknown',
          '18 Nov 2019',
          'Mahshahr, Khoozestan',
          1,
          'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V302_48px.jpg',
          'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V302_large.jpg',
          19
     );

INSERT INTO
     people_en(
          full_name,
          age,
          date,
          location,
          cause_id,
          thumb_url,
          image_url,
          province_id
     )
VALUES
     (
          'Yousef Dari',
          '35',
          '17 Nov 2019',
          'Boomehen, Tehran',
          1,
          'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V301_48px.jpg',
          'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V301_large.jpg',
          29
     );

INSERT INTO
     people_en(
          full_name,
          age,
          date,
          location,
          cause_id,
          thumb_url,
          image_url,
          province_id
     )
VALUES
     (
          'Younes Jalili',
          'Unknown',
          '15 or 19 Nov 2019',
          'Kermanshah, Kermanshah',
          1,
          'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V299_48px.jpg',
          'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V299_large.jpg',
          15
     );


-- People FA

INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('ابراهیم کتابدار','29','۲۵ آبان ۹۸','کرج، البرز',21,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V062_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V062_large.jpg',1);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('ابراهیم مرادی','21','۲۵ آبان ۹۸','جوانرود، کرمانشاه',30,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V065_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V065_large.jpg',15);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('ابراهیم مطوری','نامشخص','۲۵ آبان ۹۸','آبادان، خوزستان',7,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V061_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V061_large.jpg',19);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('ابراهیم منصوری','نامشخص','۲۶ آبان ۹۸','یزدانشهر، اصفهان',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V063_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V063_large.jpg',13);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('ابراهیم مهدی پور','50','۲۵ آبان ۹۸','اندیشه، تهران',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V064_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V064_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('ابوالفضل شعبانی','۱۶ یا ۱۷','۲۵ آبان ۹۸','بهارستان، تهران',30,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V007_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V007_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('احد بشاره دورقی','22','۲۶ آبان ۹۸','ماهشهر، خوزستان',8,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V009_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V009_large.jpg',19);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('احسان شیری','۳۰ تا ۳۵','۲۶ آبان ۹۸','فردیس، البرز',18,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V067_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V067_large.jpg',1);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('احسان عبدالله نژاد','28','۲۵ آبان ۹۸','بهبهان، خوزستان',31,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V066_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V066_large.jpg',19);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('احمد چراغیان','40','۲۷ آبان ۹۸','ماهشهر، خوزستان',32,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V010_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V010_large.jpg',19);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('احمد خواجه آلبوعلی (ادریس)','17','۲۷ آبان ۹۸','ماهشهر، خوزستان',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V013_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V013_large.jpg',19);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('احمد سعدی (جعاوله)','نامشخص (احتمالا 17 ساله)','۲۴ تا ۲۷ آبان ۹۸','شوشتر، خوزستان',21,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V219_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V219_large.jpg',19);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('احمد قربانی دستجردی','34','۲۷ آبان ۹۸','اصفهان، اصفهان',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V011_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V011_large.jpg',13);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('آذر میرزاپور','49','۲۵ آبان ۹۸','کرج، البرز',21,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V049_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V049_large.jpg',1);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('آرش کهزادی','16','۲۷ آبان ۹۸','اسلامشهر، تهران',30,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V039_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V039_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('آرشام ابراهیمی','21','۲۵ آبان ۹۸','اصفهان، اصفهان',5,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V043_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V043_large.jpg',13);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('آرمان (نیما) امانی','20','۲۶ آبان ۹۸','یزدانشهر، اصفهان',6,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V041_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V041_large.jpg',13);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('آرمین قادری','15','۲۵ آبان ۹۸','کرمانشاه، کرمانشاه',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V042_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V042_large.jpg',15);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('آریان رجبی','19','۲۵ آبان ۹۸','مریوان، کردستان',30,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V040_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V040_large.jpg',21);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('آزاده ضربی','26','۲۵ آبان ۹۸','فردیس، البرز',25,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V048_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V048_large.jpg',1);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('اسماعیل الله قلی￼￼','نامشخص','۲۶ آبان ۹۸','بهارستان، تهران',25,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V074_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V074_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('اسماعیل رضایی','30','۲۶ آبان ۹۸','قدس، تهران',21,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V072_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V072_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('اسماعیل شجاعی','نامشخص','۲۵ آبان ۹۸','رباط کریم، تهران',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V073_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V073_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('اسماعیل عرب احمدی','28','۲۵ آبان ۹۸','تهران، تهران',31,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V070_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V070_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('اسماعیل قلی پور','نامشخص','۲۵ یا ۲۶ آبان ۹۸','شهریار، تهران',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V071_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V071_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('اشکان خمره ای','نامشخص','۲۵ آبان ۹۸','مشکین دشت، البرز',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V045_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V045_large.jpg',1);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('آشور کلتا','37','۲۵ یا ۲۶ آبان ۹۸','فردیس، البرز',33,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V046_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V046_large.jpg',1);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('اصغر لشگری','25','۲۶ آبان ۹۸','فردیس، البرز',21,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V044_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V044_large.jpg',1);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('اقبال اسماعیلی','45','۲۷ آبان ۹۸','ماهشهر، خوزستان',25,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V068_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V068_large.jpg',19);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('اکبر لنگری','23','۲۶ آبان ۹۸','کرج، البرز',30,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V014_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V014_large.jpg',1);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('الخمیسی (نام کوچک نامشخص)','نامشخص','۲۵ آبان ۹۸','رامهرمز، خوزستان',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V032_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V032_large.jpg',19);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('آمنه شهبازی فرد','35','۲۶ آبان ۹۸','ملارد، تهران',34,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V033_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V033_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('امید صالحی','21','۲۵ آبان ۹۸','فردیس، البرز',26,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V187_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V187_large.jpg',1);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('امید فلاحتی','29','۲۶ آبان ۹۸','قدس، تهران',30,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V186_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V186_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('امیر (شاهپور) اوجانی','نامشخص','۲۴ تا ۲۷ آبان ۹۸','پرند، تهران',4,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V034_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V034_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('امیر الوندی مهر','25','۲۶ آبان ۹۸','گویم، فارس',31,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V035_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V035_large.jpg',7);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('امیرحسین داودوند','۱۶ یا ۱۷','۲۶ آبان ۹۸','یزدانشهر، اصفهان',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V036_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V036_large.jpg',13);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('امیرحسین کبیری','33','۲۵ آبان ۹۸','کرج، البرز',30,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V037_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V037_large.jpg',1);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('امیررضا عبداللهی','13','۲۵ آبان ۹۸','اسلامشهر، تهران',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V038_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V038_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('ایوب بهرامیان','35','۲۵ آبان ۹۸','شهریار، تهران',4,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V047_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V047_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('برهان منصورنیا','28','۲۵ آبان ۹۸','کرمانشاه، کرمانشاه',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V058_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V058_large.jpg',15);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('بنی رشید (نام کوچک نامشخص)','نامشخص','۲۵ آبان ۹۸','رامهرمز، خوزستان',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V052_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V052_large.jpg',19);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('بهروز اصغرپور','27','۲۶ آبان ۹۸','شهریار، تهران',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V053_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V053_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('بهروز ملکی','نامشخص','۲۵ آبان ۹۸','مریوان، کردستان',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V055_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V055_large.jpg',21);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('بهزاد صفرزاده','27','۲۵ آبان ۹۸','نسیم شهر، تهران',21,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V057_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V057_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('بهزاد معینی فر','27','۲۶ آبان ۹۸','اصفهان، اصفهان',25,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V056_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V056_large.jpg',13);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('بهمن جعفری','28','۲۶ آبان ۹۸','شیراز، فارس',24,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V051_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V051_large.jpg',7);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('پدرام جعفری کمیجانی','18','۲۷ آبان ۹۸','فردیس، البرز',21,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V189_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V189_large.jpg',1);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('پژمان (علی) قلیپور ملاطی','19','۲۷ آبان ۹۸','اندیشه، تهران',21,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V190_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V190_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('پوریا ناصریخواه','23','۲۵ آبان ۹۸','اسلامشهر، تهران',35,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V191_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V191_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('پویا بختیاری','27','۲۵ آبان ۹۸','کرج، البرز',30,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V192_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V192_large.jpg',1);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('جاوید میرزایی','نامشخص','۲۴ تا ۲۷ آبان ۹۸','رباط کریم، تهران',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V105_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V105_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('جبار تجاره','38','۲۵ آبان ۹۸','جوانرود، کرمانشاه',5,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V101_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V101_large.jpg',15);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('جلیل امام قلی','نامشخص','۲۵ آبان ۹۸','ملارد، تهران',21,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V218_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V218_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('جواد بابایی زاده','نامشخص','۲۵ آبان ۹۸','قدس، تهران',20,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V102_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V102_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('جواد شیازی','26','۲۵ آبان ۹۸','اصفهان، اصفهان',30,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V104_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V104_large.jpg',13);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('جواد نظری فتح آبادی','نامشخص','۲۴ آبان ۹۸','سیرجان، کرمان',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V103_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V103_large.jpg',14);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('چنعانی (نام کوچک نامشخص)','۸ تا ۱۲','۲۷ آبان ۹۸','ماهشهر، خوزستان',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V059_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V059_large.jpg',19);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('حسام بارانی راد','17','۲۵ آبان ۹۸','کرمانشاه، کرمانشاه',30,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V095_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V095_large.jpg',15);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('حسن صحرایی','نامشخص','۲۴ تا ۲۷ آبان ۹۸','ملارد، تهران',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V093_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V093_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('حسن طاووسی','نامشخص','۲۵ آبان ۹۸','(شهر نامشخص)، تهران',21,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V094_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V094_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('حسن علیزاده','23','۲۵ آبان ۹۸','قدس، تهران',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V091_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V091_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('حسن غزلاوی','27','۲۵ یا ۲۶ آبان ۹۸','خرمشهر، خوزستان',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V092_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V092_large.jpg',19);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('حسین آبروی','نامشخص','۲۴ آبان ۹۸','قدس، تهران',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V193_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V193_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('حسین حیدری','نامشخص','۲۵ آبان ۹۸','شیراز، فارس',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V099_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V099_large.jpg',7);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('حسین قاسمی','19','۲۶ آبان ۹۸','چهاردانگه، تهران',22,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V098_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V098_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('حسین قدمی','30','۲۵ آبان ۹۸','فردیس، البرز',19,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V097_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V097_large.jpg',1);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('حسین کریمی علویجه','51','۲۶ آبان ۹۸','ملکشهر، اصفهان',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V100_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V100_large.jpg',13);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('حمزه البریهی','17','۲۴ آبان ۹۸','اهواز، خوزستان',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V088_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V088_large.jpg',19);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('حمزه سواری','۲۲ تا ۲۵','۲۵ آبان ۹۸','اهواز، خوزستان',18,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V090_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V090_large.jpg',19);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('حمزه علی نعمتی','نامشخص','۲۴ تا ۲۷ آبان ۹۸','قدس، تهران',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V087_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V087_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('حمزه فرجی','نامشخص','۲۶ آبان ۹۸','کرمانشاه، کرمانشاه',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V089_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V089_large.jpg',15);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('حمید رسولی','32','۲۶ آبان ۹۸','کرج، البرز',24,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V083_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V083_large.jpg',1);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('حمید شریفی','نامشخص','۲۵ یا ۲۶ آبان ۹۸','اصفهان، اصفهان',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V084_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V084_large.jpg',13);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('حمید طاهری','35','۲۵ آبان ۹۸','چهاردانگه، تهران',36,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V220_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V220_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('حمیدرضا حسینی￼￼','30','۲۵ آبان ۹۸','شهریار، تهران',21,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V086_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V086_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('حمیدرضا قبولی','19','۲۷ آبان ۹۸','اندیشه، تهران',30,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V085_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V085_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('حیدرعلی رمضان نژاد','53','۲۵ آبان ۹۸','قدس، تهران',18,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V096_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V096_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('خالد غزلاوی','16','۲۵ آبان ۹۸','خرمشهر، خوزستان',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V108_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V108_large.jpg',19);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('دانیال استواری','نامشخص','۲۶ آبان ۹۸','مریوان، کردستان',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V060_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V060_large.jpg',21);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('رامین لمسه','28','۲۶ آبان ۹۸','ملارد، تهران',30,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V195_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V195_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('رحیم امین آبادی','35','۲۶ آبان ۹۸','فردیس، البرز',4,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V194_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V194_large.jpg',1);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('رزاق ناصرزاده','38','۲۶ آبان ۹۸','ماهشهر، خوزستان',30,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V199_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V199_large.jpg',19);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('رسول امانی','نامشخص','۲۴ تا ۲۷ آبان ۹۸','قهدريجان‎، اصفهان',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V196_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V196_large.jpg',13);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('رضا پذیرش','23','۲۵ یا ۲۶ آبان ۹۸','شهریار، تهران',25,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V233_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V233_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('رضا تاری‌وردی','نامشخص','۲۵ آبان ۹۸','ملارد، تهران',30,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V200_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V200_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('رضا حسنوند','26','۲۶ آبان ۹۸','اندیشه، تهران',21,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V203_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V203_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('رضا ساقی','23','۲۵ آبان ۹۸','(شهر نامشخص)، تهران',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V207_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V207_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('رضا عباسی','نامشخص','۲۵ آبان ۹۸','اصفهان، اصفهان',30,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V201_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V201_large.jpg',13);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('رضا علیپور','34','۲۵ آبان ۹۸','صدرا، فارس',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V202_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V202_large.jpg',7);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('رضا معظمی گودرزی','19','۲۶ آبان ۹۸','شهریار یا کرج، تهران یا البرز',30,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V204_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V204_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('رضا منصوری','نامشخص','۲۷ آبان ۹۸','ماهشهر، خوزستان',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V198_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V198_large.jpg',19);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('رضا نیسی','۱۶ تا ۱۹','۲۵ آبان ۹۸','اهواز، خوزستان',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V206_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V206_large.jpg',19);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('روانبخش امامی راد','نامشخص','۲۴ تا ۲۷ آبان ۹۸','آبادان، خوزستان',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V197_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V197_large.jpg',19);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('زیبا خوشگوار','38','۲۵ آبان ۹۸','سنندج، کردستان',28,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V304_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V304_large.jpg',21);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('ساسان عیدی وندی','17','۲۶ آبان ۹۸','یزدانشهر، اصفهان',21,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V214_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V214_large.jpg',13);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('سالم امیر سنجریان','نامشخص','۲۷ آبان ۹۸','ماهشهر، خوزستان',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V213_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V213_large.jpg',19);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('سجاد باقری','نامشخص','۲۵ آبان ۹۸','کرمانشاه، کرمانشاه',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V211_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V211_large.jpg',15);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('سجاد رضایی','23','۲۵ آبان ۹۸','ملارد، تهران',5,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V212_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V212_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('سعید رضایی','26','۲۵ آبان ۹۸','کرمانشاه، کرمانشاه',25,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V209_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V209_large.jpg',15);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('سیامک نویدی','32','۲۶ آبان ۹۸','تهران (كيانشهر‎)، تهران',30,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V225_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V225_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('شبنم دیانی','20','۲۴ آبان ۹۸','شیراز، فارس',31,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V222_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V222_large.jpg',7);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('شهرام معینی','47','۲۵ آبان ۹۸','کرج، البرز',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V224_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V224_large.jpg',1);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('شهنام شکری','40','۲۵ آبان ۹۸','کرج، البرز',30,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V223_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V223_large.jpg',1);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('صادق احمد پناهی','نامشخص','۲۶ آبان ۹۸','صدرا، فارس',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V208_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V208_large.jpg',7);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('صفر عیدی وندی','۲۳ یا ۲۴','۲۶ آبان ۹۸','یزدانشهر، اصفهان',30,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V210_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V210_large.jpg',13);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('طاهر الخمیس (حطاوی)','25','۲۷ آبان ۹۸','ماهشهر، خوزستان',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V226_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V226_large.jpg',19);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('عباس منصوری (عساکره)','نامشخص','۲۷ آبان ۹۸','ماهشهر، خوزستان',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V002_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V002_large.jpg',19);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('عباسی (نام کوچک نامشخص)','نامشخص','۲۵ آبان ۹۸','صدرا، فارس',5,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V003_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V003_large.jpg',7);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('عبدالرضا شیرزادی','20','۲۵ آبان ۹۸','کرمانشاه، کرمانشاه',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V006_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V006_large.jpg',15);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('عبدالله آجرلو','26','۲۵ آبان ۹۸','شهرک قدس یا اسلامشهر، تهران',27,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V004_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V004_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('عبدالله قویمی','نامشخص','۲۶ آبان ۹۸','صدرا، فارس',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V005_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V005_large.jpg',7);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('عثمان نادری','نامشخص','۲۵ آبان ۹۸','مریوان، کردستان',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V188_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V188_large.jpg',21);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('عدنان هلالی','نامشخص','۲۷ آبان ۹۸','ماهشهر، خوزستان',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V008_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V008_large.jpg',19);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('عرفان فائقی','21','۲۶ آبان ۹۸','چهاردانگه، تهران',21,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V069_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V069_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('عزیز اسکندری','33','۲۵ آبان ۹۸','مشکین دشت، البرز',25,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V050_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V050_large.jpg',1);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('علی (یونس) فیروزبخت','نامشخص','۲۵ آبان ۹۸','جوانرود، کرمانشاه',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V015_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V015_large.jpg',15);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('علی آقایی','21','۲۵ یا ۲۶ آبان ۹۸','نسیم شهر، تهران',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V016_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V016_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('علی اکبر ابروتن','نامشخص','۲۷ آبان ۹۸','اسلامشهر، تهران',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V017_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V017_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('علی باوی','25','۲۶ آبان ۹۸','ماهشهر، خوزستان',30,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V019_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V019_large.jpg',19);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('علی بغلانی','نامشخص','۲۵ آبان ۹۸','آبادان، خوزستان',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V018_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V018_large.jpg',19);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('علی تمیمی','27','۲۵ آبان ۹۸','اهواز، خوزستان',30,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V026_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V026_large.jpg',19);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('علی حسینی','نامشخص (احتمالا زیر 18 سال)','۲۵ آبان ۹۸','مشکین دشت، البرز',9,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V216_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V216_large.jpg',1);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('علی خواجه آلبوعلی','نامشخص','۲۷ آبان ۹۸','ماهشهر، خوزستان',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V012_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V012_large.jpg',19);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('علی دبیری','زیر ۱۸ سال','۲۵ آبان ۹۸','صدرا، فارس',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V020_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V020_large.jpg',7);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('علی رحمانی','45','۲۶ آبان ۹۸','ماهشهر، خوزستان',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V024_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V024_large.jpg',19);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('علی سرتیپی','21','۲۶ آبان ۹۸','ملارد، تهران',18,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V025_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V025_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('علی غزلاوی','12','۲۶ آبان ۹۸','خرمشهر، خوزستان',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V021_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V021_large.jpg',19);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('علی فتوحی کوهساره','نامشخص','۲۵ آبان ۹۸','اسلامشهر، تهران',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V215_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V215_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('علی محمد آقاپور','نامشخص','۲۴ تا ۲۷ آبان ۹۸','کرج، البرز',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V022_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V022_large.jpg',1);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('علی مرادی','نامشخص','۲۶ آبان ۹۸','ماهشهر، خوزستان',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V023_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V023_large.jpg',19);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('علی موسوی','12','۲۵ آبان ۹۸','رامهرمز، خوزستان',21,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V217_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V217_large.jpg',19);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('علیرضا استوان','17','۲۵ آبان ۹۸','رباط کریم، تهران',30,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V031_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V031_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('علیرضا انجوی','26','۲۵ آبان ۹۸','صدرا، فارس',30,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V027_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V027_large.jpg',7);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('علیرضا محمدزاده','29','۲۶ آبان ۹۸','بهارستان، تهران',9,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V028_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V028_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('علیرضا نوری','17','۲۶ آبان ۹۸','شهریار، تهران',30,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V030_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V030_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('علیرضا نیکجه','نامشخص','۲۶ آبان ۹۸','شهریار، تهران',31,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V029_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V029_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('فرامرز پورفرسادی','51','۲۶ آبان ۹۸','فردیس، البرز',29,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V075_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V075_large.jpg',1);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('فرزاد انصاری فر','27','۲۵ آبان ۹۸','بهبهان، خوزستان',30,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V078_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V078_large.jpg',19);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('فرشاد حاجی پور میلاسی','30','۲۶ آبان ۹۸','ماهشهر، خوزستان',23,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V077_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V077_large.jpg',19);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('فرهاد مجدم','38','۲۵ آبان ۹۸','ملارد، تهران',30,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V076_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V076_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('قاسم باوی','نامشخص','۲۷ آبان ۹۸','ماهشهر، خوزستان',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V079_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V079_large.jpg',19);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('کاوه محمدی','35','۲۵ آبان ۹۸','جوانرود، کرمانشاه',23,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V107_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V107_large.jpg',15);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('کمال فرجی','41','۲۶ آبان ۹۸','اسلامشهر، تهران',31,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V106_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V106_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('کوروش شیدانی','نامشخص','۲۶ آبان ۹۸','کرج، البرز',21,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V109_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V109_large.jpg',1);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('کیوان یرفی','42','۲۵ یا ۲۶ آبان ۹۸','شیراز، فارس',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V221_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V221_large.jpg',7);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('گلنار صمصامی','34','۲۶ آبان ۹۸','شهریار، تهران',30,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V080_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V080_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('مبین عبدالهی','27','۲۶ آبان ۹۸','جوانرود، کرمانشاه',21,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V141_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V141_large.jpg',15);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('مجاهد الجامعی','۱۵ تا ۱۷','۲۶ آبان ۹۸','اهواز، خوزستان',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V173_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V173_large.jpg',19);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('مجتبی عبادی','نامشخص','۲۷ آبان ۹۸','ماهشهر، خوزستان',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V174_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V174_large.jpg',19);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('مجید شیخی','22','۲۶ آبان ۹۸','اسلامشهر، تهران',31,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V114_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V114_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('مجید فلاحپور','نامشخص','۲۵ یا ۲۶ آبان ۹۸','(شهر نامشخص)، تهران',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V112_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V112_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('مجید مجدم','نامشخص','۲۶ آبان ۹۸','ماهشهر، خوزستان',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V113_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V113_large.jpg',19);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('مجید هاشمی','34','۲۶ آبان ۹۸','صدرا، فارس',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V115_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V115_large.jpg',7);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('محسن آلبوعلی','۱۷ یا ۲۷','۲۷ آبان ۹۸','شادگان، خوزستان',30,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V167_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V167_large.jpg',19);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('محسن ایرانشاهی','نامشخص','۲۶ آبان ۹۸','چهاردانگه، تهران',37,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V168_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V168_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('محسن جعفرپناه','30','۲۶ آبان ۹۸','اسلامشهر، تهران',30,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V169_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V169_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('محسن عبادی مهر','نامشخص','۲۷ آبان ۹۸','ماهشهر، خوزستان',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V178_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V178_large.jpg',19);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('محسن کرمی نیا','34','۲۵ آبان ۹۸','کرمانشاه، کرمانشاه',21,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V170_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V170_large.jpg',15);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('محسن محمدپور','17','۲۵ آبان ۹۸','خرمشهر، خوزستان',29,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V171_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V171_large.jpg',19);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('محمد (نام فامیلی نامشخص)','نامشخص','۲۴ تا ۲۷ آبان ۹۸','شهریار، تهران',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V142_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V142_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('محمد ابراهیمی','نامشخص','۲۵ یا ۲۶ آبان ۹۸','قهدريجان‎، اصفهان',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V145_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V145_large.jpg',13);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('محمد پارسا عزیزی مقدم','نامشخص','۲۴ تا ۲۷ آبان ۹۸','شهریار، تهران',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V157_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V157_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('محمد پالانی','17','۲۵ یا ۲۶ آبان ۹۸','کرمانشاه، کرمانشاه',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V156_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V156_large.jpg',15);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('محمد پورپیرعلی','نامشخص','۲۶ آبان ۹۸','یزدانشهر، اصفهان',30,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V158_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V158_large.jpg',13);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('محمد تیموری','نامشخص','۲۵ آبان ۹۸','ملارد، تهران',31,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V164_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V164_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('محمد حشمدار','33','۲۵ آبان ۹۸','بهبهان، خوزستان',25,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V146_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V146_large.jpg',19);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('محمد حیدریان','19','۲۶ آبان ۹۸','کرج، البرز',30,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V147_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V147_large.jpg',1);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('محمد خالدی','نامشخص','۲۷ آبان ۹۸','ماهشهر، خوزستان',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V151_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V151_large.jpg',19);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('محمد خالقی','نامشخص','۲۷ آبان ۹۸','ماهشهر، خوزستان',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V152_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V152_large.jpg',19);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('محمد خزایی','نامشخص','۲۶ آبان ۹۸','ملارد، تهران',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V153_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V153_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('محمد داستانخواه','15','۲۵ آبان ۹۸','صدرا، فارس',21,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V144_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V144_large.jpg',7);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('محمد طاهری','19','۲۵ آبان ۹۸','بهارستان، تهران',30,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V163_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V163_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('محمد عربی','20','۲۶ آبان ۹۸','شهریار، تهران',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V143_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V143_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('محمد معین صالحی','19','۲۴ تا ۲۷ آبان ۹۸','ملارد، تهران',30,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V155_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V155_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('محمد ملکی','23','۲۵ آبان ۹۸','بهارستان، تهران',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V154_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V154_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('محمدامین الله قلی','23','۲۵ آبان ۹۸','فردیس، البرز',21,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V001_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V001_large.jpg',1);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('محمدجواد عابدی','16','۲۶ آبان ۹۸','اصفهان، اصفهان',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V150_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V150_large.jpg',13);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('محمدحسین طاهایی','34','۲۷ آبان ۹۸','شهریار، تهران',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V149_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V149_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('محمدحسین قنواتی','25','۲۵ آبان ۹۸','بهبهان، خوزستان',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V148_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V148_large.jpg',19);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('محمدرضا احمدی','17','۲۵ آبان ۹۸','سنندج، کردستان',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V159_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V159_large.jpg',21);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('محمدرضا الحسینی','30','۲۷ آبان ۹۸','تهران، تهران',25,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V160_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V160_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('محمدرضا اینانلو','نامشخص','۲۵ یا ۲۶ آبان ۹۸','کرج، البرز',21,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V165_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V165_large.jpg',1);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('محمدرضا جمشیدی','20','۲۵ آبان ۹۸','شیراز، فارس',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V166_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V166_large.jpg',7);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('محمدرضا عسافی زرگانی','20','۲۴ تا ۲۷ آبان ۹۸','اهواز، خوزستان',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V205_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V205_large.jpg',19);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('محمدرضا محمدی','نامشخص','۲۴ تا ۲۷ آبان ۹۸','(شهر نامشخص)، تهران',30,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V161_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V161_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('محمدرضا نیکوروان','22','۲۴ تا ۲۷ آبان ۹۸','(شهر نامشخص)، تهران',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V162_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V162_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('محمود دشتی نیا','نامشخص','۲۵ آبان ۹۸','بهبهان، خوزستان',31,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V110_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V110_large.jpg',19);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('مرتضی صادقی نادر','35','۲۶ آبان ۹۸','کرج، البرز',31,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V175_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V175_large.jpg',1);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('مسعود بهارلو','25','۲۵ آبان ۹۸','اصفهان، اصفهان',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V118_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V118_large.jpg',13);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('مصطفی ابروتن','19','۲۷ آبان ۹۸','اسلامشهر، تهران',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V176_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V176_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('مصطفی رودباریان','34','۲۶ آبان ۹۸','ماهشهر، خوزستان',31,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V179_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V179_large.jpg',19);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('مصطفی فرزامی','27','۲۶ آبان ۹۸','(شهر نامشخص)، تهران',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V177_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V177_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('مظفر وطن دوست','45','۲۵ آبان ۹۸','کرمانشاه، کرمانشاه',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V180_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V180_large.jpg',15);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('معین مسلم پور','نامشخص','۲۵ آبان ۹۸','اندیمشک، خوزستان',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V172_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V172_large.jpg',19);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('منصور دریس','۳۰ تا ۳۴','۲۶ آبان ۹۸','ماهشهر، خوزستان',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V117_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V117_large.jpg',19);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('منصور عساکره','41','۲۷ آبان ۹۸','ماهشهر، خوزستان',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V116_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V116_large.jpg',19);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('مهدی احمدی','نامشخص','۲۵ آبان ۹۸','چهاردانگه، تهران',4,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V121_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V121_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('مهدی پاپی','31','۲۵ یا ۲۶ آبان ۹۸','فردیس، البرز',30,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V119_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V119_large.jpg',1);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('مهدی جهانبازی','35','۲۶ آبان ۹۸','شیراز، فارس',30,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V123_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V123_large.jpg',7);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('مهدی دائمی','25','۲۵ آبان ۹۸','شهریار، تهران',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V122_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V122_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('مهدی رودباریان','21','۲۶ آبان ۹۸','ماهشهر، خوزستان',30,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V126_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V126_large.jpg',19);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('مهدی سبزی','نامشخص','۲۴ تا ۲۷ آبان ۹۸','ملکشهر، اصفهان',30,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V127_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V127_large.jpg',13);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('مهدی عباسی امجد','نامشخص','۲۶ آبان ۹۸','کرج، البرز',30,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V120_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V120_large.jpg',1);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('مهدی کلوخی','نامشخص','۲۵ آبان ۹۸','مشکین دشت، البرز',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V124_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V124_large.jpg',1);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('مهدی نکوئی','23','۲۵ آبان ۹۸','شیراز، فارس',5,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V125_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V125_large.jpg',7);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('مهدی ولی پور','16','۲۶ آبان ۹۸','بهارستان، تهران',30,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V128_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V128_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('مهران تاک','32','۲۵ آبان ۹۸','مریوان، کردستان',30,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V129_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V129_large.jpg',21);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('مهران زاهدی','19','۲۶ آبان ۹۸','شهریار، تهران',25,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V130_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V130_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('مهرداد حسابی شیجانی','نامشخص','۲۵ یا ۲۶ آبان ۹۸','(شهر نامشخص)، تهران',30,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V132_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V132_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('مهرداد دشتی نیا','نامشخص','۲۵ آبان ۹۸','بهبهان، خوزستان',30,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V131_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V131_large.jpg',19);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('مهرداد معین فر','32','۲۶ آبان ۹۸','شهریار، تهران',21,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V133_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V133_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('مهرزاد رضایی','25','۲۶ آبان ۹۸','ملارد، تهران',27,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V134_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V134_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('مهناز مهدی زاده','نامشخص','۲۵ آبان ۹۸','شهریار، تهران',38,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V111_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V111_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('میثم احمدی','26','۲۵ آبان ۹۸','کرج، البرز',18,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V135_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V135_large.jpg',1);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('میثم مجدم','نامشخص','۲۴ تا ۲۷ آبان ۹۸','اهواز، خوزستان',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V137_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V137_large.jpg',19);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('میثم منیعات','25','۲۴ آبان ۹۸','خرمشهر، خوزستان',30,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V136_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V136_large.jpg',19);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('میلاد حمیدی','19','۲۵ آبان ۹۸','خرمشهر، خوزستان',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V138_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V138_large.jpg',19);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('میلاد محققی￼￼','24','۲۶ آبان ۹۸','ملارد، تهران',30,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V139_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V139_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('مینا شیخی','58','۲۵ آبان ۹۸','تهران، تهران',31,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V140_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V140_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('نادر بیژنوند','22','۲۵ آبان ۹۸','کرمانشاه، کرمانشاه',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V181_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V181_large.jpg',15);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('نادر مومنی','55','۲۶ آبان ۹۸','شهریار، تهران',33,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V182_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V182_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('نادر نصیرپور','66','۲۶ آبان ۹۸','شیراز، فارس',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V183_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V183_large.jpg',7);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('ناصر رضایی','36','۲۶ آبان ۹۸','کرج، البرز',30,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V184_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V184_large.jpg',1);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('نوید بهبودی','23','۲۶ آبان ۹۸','قدس، تهران',30,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V185_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V185_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('هادی قربانی','20','۲۵ یا ۲۶ آبان ۹۸','نسیم شهر، تهران',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V081_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V081_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('هادی محمدی￼￼','24','۲۵ آبان ۹۸','(شهر نامشخص)، تهران',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V082_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V082_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('هویت شناسایی نشده','نامشخص','۲۷ آبان ۹۸','ماهشهر، خوزستان',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V303_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V303_large.jpg',19);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('هویت شناسایی نشده','نامشخص','۲۵ یا ۲۶ آبان ۹۸','ملارد، تهران',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V292_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V292_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('هویت شناسایی نشده','نامشخص','۲۵ یا ۲۶ آبان ۹۸','شهریار یا ملارد، تهران',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V256_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V256_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('هویت شناسایی نشده','نامشخص','۲۵ یا ۲۶ آبان ۹۸','شهریار یا ملارد، تهران',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V257_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V257_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('هویت شناسایی نشده','نامشخص','۲۵ یا ۲۶ آبان ۹۸','شهریار یا ملارد، تهران',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V258_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V258_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('هویت شناسایی نشده','نامشخص','۲۵ یا ۲۶ آبان ۹۸','شهریار یا ملارد، تهران',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V259_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V259_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('هویت شناسایی نشده','نامشخص','۲۵ یا ۲۶ آبان ۹۸','شهریار یا ملارد، تهران',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V260_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V260_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('هویت شناسایی نشده','نامشخص','۲۵ یا ۲۶ آبان ۹۸','شهریار یا ملارد، تهران',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V261_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V261_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('هویت شناسایی نشده','نامشخص','۲۵ یا ۲۶ آبان ۹۸','شهریار یا ملارد، تهران',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V262_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V262_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('هویت شناسایی نشده','نامشخص','۲۵ یا ۲۶ آبان ۹۸','شهریار یا ملارد، تهران',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V263_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V263_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('هویت شناسایی نشده','نامشخص','۲۵ یا ۲۶ آبان ۹۸','شهریار یا ملارد، تهران',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V264_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V264_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('هویت شناسایی نشده','نامشخص','۲۵ یا ۲۶ آبان ۹۸','شهریار یا ملارد، تهران',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V265_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V265_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('هویت شناسایی نشده','نامشخص','۲۵ یا ۲۶ آبان ۹۸','شهریار یا ملارد، تهران',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V266_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V266_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('هویت شناسایی نشده','نامشخص','۲۵ یا ۲۶ آبان ۹۸','شهریار یا ملارد، تهران',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V267_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V267_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('هویت شناسایی نشده','نامشخص','۲۵ یا ۲۶ آبان ۹۸','شهریار یا ملارد، تهران',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V268_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V268_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('هویت شناسایی نشده','نامشخص','۲۵ یا ۲۶ آبان ۹۸','شهریار یا ملارد، تهران',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V269_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V269_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('هویت شناسایی نشده','نامشخص','۲۵ یا ۲۶ آبان ۹۸','شهریار یا ملارد، تهران',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V270_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V270_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('هویت شناسایی نشده','نامشخص','۲۵ یا ۲۶ آبان ۹۸','شهریار یا ملارد، تهران',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V271_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V271_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('هویت شناسایی نشده','نامشخص','۲۵ یا ۲۶ آبان ۹۸','شهریار یا ملارد، تهران',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V272_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V272_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('هویت شناسایی نشده','نامشخص','۲۵ یا ۲۶ آبان ۹۸','شهریار یا ملارد، تهران',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V273_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V273_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('هویت شناسایی نشده','نامشخص','۲۵ یا ۲۶ آبان ۹۸','شهریار یا ملارد، تهران',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V274_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V274_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('هویت شناسایی نشده','نامشخص','۲۵ یا ۲۶ آبان ۹۸','شهریار یا ملارد، تهران',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V275_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V275_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('هویت شناسایی نشده','نامشخص','۲۵ یا ۲۶ آبان ۹۸','شهریار یا ملارد، تهران',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V276_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V276_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('هویت شناسایی نشده','نامشخص','۲۵ یا ۲۶ آبان ۹۸','شهریار یا ملارد، تهران',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V277_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V277_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('هویت شناسایی نشده','نامشخص','۲۵ یا ۲۶ آبان ۹۸','شهریار یا ملارد، تهران',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V278_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V278_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('هویت شناسایی نشده','نامشخص','۲۵ یا ۲۶ آبان ۹۸','شهریار یا ملارد، تهران',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V279_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V279_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('هویت شناسایی نشده','نامشخص','۲۵ یا ۲۶ آبان ۹۸','شهریار یا ملارد، تهران',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V280_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V280_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('هویت شناسایی نشده','نامشخص','۲۵ یا ۲۶ آبان ۹۸','شهریار یا ملارد، تهران',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V281_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V281_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('هویت شناسایی نشده','نامشخص','۲۴ تا ۲۷ آبان ۹۸','شهریار یا ملارد، تهران',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V282_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V282_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('هویت شناسایی نشده','نامشخص','۲۴ تا ۲۷ آبان ۹۸','شهریار یا ملارد، تهران',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V283_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V283_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('هویت شناسایی نشده','نامشخص','۲۴ تا ۲۷ آبان ۹۸','شهریار یا ملارد، تهران',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V284_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V284_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('هویت شناسایی نشده','نامشخص','۲۴ تا ۲۷ آبان ۹۸','شهریار یا ملارد، تهران',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V285_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V285_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('هویت شناسایی نشده','نامشخص','۲۴ تا ۲۷ آبان ۹۸','شهریار یا ملارد، تهران',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V286_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V286_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('هویت شناسایی نشده','نامشخص','۲۴ تا ۲۷ آبان ۹۸','شهریار یا ملارد، تهران',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V287_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V287_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('هویت شناسایی نشده','نامشخص','۲۴ تا ۲۷ آبان ۹۸','شهریار یا ملارد، تهران',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V288_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V288_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('هویت شناسایی نشده','نامشخص','۲۴ تا ۲۷ آبان ۹۸','شهریار یا ملارد، تهران',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V289_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V289_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('هویت شناسایی نشده','نامشخص','۲۴ تا ۲۷ آبان ۹۸','کرمانشاه، کرمانشاه',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V235_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V235_large.jpg',15);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('هویت شناسایی نشده','نامشخص','۲۴ تا ۲۷ آبان ۹۸','کرمانشاه، کرمانشاه',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V236_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V236_large.jpg',15);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('هویت شناسایی نشده','نامشخص','۲۴ تا ۲۷ آبان ۹۸','کرمانشاه، کرمانشاه',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V237_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V237_large.jpg',15);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('هویت شناسایی نشده','نامشخص','۲۴ تا ۲۷ آبان ۹۸','کرمانشاه، کرمانشاه',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V238_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V238_large.jpg',15);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('هویت شناسایی نشده','نامشخص','۲۴ تا ۲۷ آبان ۹۸','کرمانشاه، کرمانشاه',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V239_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V239_large.jpg',15);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('هویت شناسایی نشده','نامشخص','۲۴ تا ۲۷ آبان ۹۸','کرمانشاه، کرمانشاه',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V240_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V240_large.jpg',15);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('هویت شناسایی نشده','نامشخص','۲۴ تا ۲۷ آبان ۹۸','کرمانشاه، کرمانشاه',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V241_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V241_large.jpg',15);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('هویت شناسایی نشده','نامشخص','۲۴ تا ۲۷ آبان ۹۸','کرمانشاه، کرمانشاه',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V242_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V242_large.jpg',15);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('هویت شناسایی نشده','نامشخص','۲۴ تا ۲۷ آبان ۹۸','کرمانشاه، کرمانشاه',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V243_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V243_large.jpg',15);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('هویت شناسایی نشده','نامشخص','۲۴ تا ۲۷ آبان ۹۸','کرمانشاه، کرمانشاه',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V244_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V244_large.jpg',15);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('هویت شناسایی نشده','نامشخص','۲۴ تا ۲۷ آبان ۹۸','کرمانشاه، کرمانشاه',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V245_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V245_large.jpg',15);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('هویت شناسایی نشده','نامشخص','۲۴ تا ۲۷ آبان ۹۸','کرمانشاه، کرمانشاه',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V246_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V246_large.jpg',15);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('هویت شناسایی نشده','نامشخص','۲۵ آبان ۹۸','بهارستان، تهران',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V227_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V227_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('هویت شناسایی نشده','نامشخص','۲۵ آبان ۹۸','بهارستان، تهران',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V228_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V228_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('هویت شناسایی نشده','نامشخص','۲۵ آبان ۹۸','بهارستان، تهران',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V229_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V229_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('هویت شناسایی نشده','نامشخص','۲۵ آبان ۹۸','چهاردانگه، تهران',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V230_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V230_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('هویت شناسایی نشده','نامشخص','۲۵ آبان ۹۸','چهاردانگه، تهران',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V231_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V231_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('هویت شناسایی نشده','نامشخص','۲۵ یا ۲۶ آبان ۹۸','فردیس، تهران',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V232_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V232_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('هویت شناسایی نشده','نامشخص','۲۵ آبان ۹۸','جوانرود، کرمانشاه',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V234_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V234_large.jpg',15);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('هویت شناسایی نشده','نامشخص','۲۷ آبان ۹۸','ماهشهر، خوزستان',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V247_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V247_large.jpg',19);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('هویت شناسایی نشده','نامشخص','۲۴ تا ۲۷ آبان ۹۸','ملکشهر، اصفهان',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V248_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V248_large.jpg',13);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('هویت شناسایی نشده','نامشخص','۲۴ تا ۲۷ آبان ۹۸','رباط کریم، تهران',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V249_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V249_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('هویت شناسایی نشده','نامشخص','۲۴ تا ۲۷ آبان ۹۸','رباط کریم، تهران',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V250_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V250_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('هویت شناسایی نشده','نامشخص','۲۴ تا ۲۷ آبان ۹۸','رباط کریم، تهران',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V251_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V251_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('هویت شناسایی نشده','نامشخص','۲۴ تا ۲۷ آبان ۹۸','صدرا، فارس',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V252_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V252_large.jpg',7);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('هویت شناسایی نشده','نامشخص','۲۴ تا ۲۷ آبان ۹۸','صدرا، فارس',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V255_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V255_large.jpg',7);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('هویت شناسایی نشده','نامشخص','۲۴ تا ۲۷ آبان ۹۸','صدرا، فارس',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V253_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V253_large.jpg',7);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('هویت شناسایی نشده','نامشخص','۲۴ تا ۲۷ آبان ۹۸','صدرا، فارس',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V254_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V254_large.jpg',7);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('هویت شناسایی نشده','نامشخص','۲۴ آبان ۹۸','سیرجان، کرمان',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V291_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V291_large.jpg',14);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('هویت شناسایی نشده','نامشخص','۲۴ تا ۲۷ آبان ۹۸','شیراز، فارس',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V290_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V290_large.jpg',7);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('هویت شناسایی نشده (احتمالا بهروز فلاح)','نامشخص','۲۶ آبان ۹۸','بومهن، تهران',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V054_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V054_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('وحید توسلی دوست','48','۲۶ آبان ۹۸','شیراز، فارس',31,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V294_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V294_large.jpg',7);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('وحید دامور','30','۲۶ آبان ۹۸','ملارد، تهران',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V293_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V293_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('یاسین (مجتبی) رمضان نژاد','34','۲۶ آبان ۹۸','قدس، تهران',30,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V298_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V298_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('یدالله حاجی طاری پور','۶۳ یا ۶۴','۲۵ آبان ۹۸','شیراز، فارس',28,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V295_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V295_large.jpg',7);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('یعقوب خسروی','نامشخص','۲۵ یا ۲۶ آبان ۹۸','(شهر نامشخص)، اصفهان',30,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V296_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V296_large.jpg',13);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('یعقوب نجفی بابادی','26','۲۶ آبان ۹۸','اصفهان، اصفهان',9,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V297_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V297_large.jpg',13);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('یوسف آلبو عبادی','نامشخص','۲۷ آبان ۹۸','ماهشهر، خوزستان',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V300_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V300_large.jpg',19);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('یوسف خالدی','نامشخص','۲۷ آبان ۹۸','ماهشهر، خوزستان',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V302_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V302_large.jpg',19);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('یوسف دری','35','۲۶ آبان ۹۸','بومهن، تهران',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V301_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V301_large.jpg',29);
INSERT INTO people_fa(full_name,age,date,location,cause_id,thumb_url,image_url,province_id) values ('یونس جلیلی','نامشخص','۲۴ تا ۲۷ آبان ۹۸','کرمانشاه، کرمانشاه',17,'https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/medium_48px/V299_48px.jpg','https://sanelrsiranshutprod001.blob.core.windows.net/assets/iran_victim/large_350px/V299_large.jpg',15);


-- Provinces

INSERT INTO
    provinces(id, fa, en)
values
(1, 'البرز', 'Alborz');

INSERT INTO
    provinces(id, fa, en)
values
(2, 'اردبیل', 'Ardabil');

INSERT INTO
    provinces(id, fa, en)
values
(3, 'آذربایجان شرقی', 'Eat Azerbaijan');

INSERT INTO
    provinces(id, fa, en)
values
(4, 'آذربایجان غربی', 'West Azerbaijan');

INSERT INTO
    provinces(id, fa, en)
values
(5, 'بوشهر', 'Bushehr');

INSERT INTO
    provinces(id, fa, en)
values
(6, 'چهارمحال و بختیاری', 'Chahar Mahaal and Bakhtiari');

INSERT INTO
    provinces(id, fa, en)
values
(7, 'فارس', 'Fars');

INSERT INTO
    provinces(id, fa, en)
values
(8, 'گیلان', 'Gilan');

INSERT INTO
    provinces(id, fa, en)
values
(9, 'گلستان', 'Golestan');

INSERT INTO
    provinces(id, fa, en)
values
(10, 'همدان', 'Hamadan');

INSERT INTO
    provinces(id, fa, en)
values
(11, 'هرمزگان', 'Hormozgan');

INSERT INTO
    provinces(id, fa, en)
values
(12, 'ایلام', 'Ilam');

INSERT INTO
    provinces(id, fa, en)
values
(13, 'اصفهان', 'Isfahan');

INSERT INTO
    provinces(id, fa, en)
values
(14, 'کرمان', 'Kerman');

INSERT INTO
    provinces(id, fa, en)
values
(15, 'کرمانشاه', 'Kermanshah');

INSERT INTO
    provinces(id, fa, en)
values
(16, 'خراسان شمالی', 'North Khorasan');

INSERT INTO
    provinces(id, fa, en)
values
(17, 'خراسان رضوی', 'Razavi Khorasan');

INSERT INTO
    provinces(id, fa, en)
values
(18, 'خراسان جنوبی', 'South Khorasan');

INSERT INTO
    provinces(id, fa, en)
values
(19, 'خوزستان', 'Khuzestan');

INSERT INTO
    provinces(id, fa, en)
values
(
        20,
        'کهگیلویه و بویراحمد',
        'Kohgiluyeh and Boyerahmad'
    );

INSERT INTO
    provinces(id, fa, en)
values
(21, 'کردستان', 'Kurdistan');

INSERT INTO
    provinces(id, fa, en)
values
(22, 'لرستان', 'Lorestan');

INSERT INTO
    provinces(id, fa, en)
values
(23, 'مرکزی', 'Markazi');

INSERT INTO
    provinces(id, fa, en)
values
(24, 'مازندران', 'Mazandaran');

INSERT INTO
    provinces(id, fa, en)
values
(25, 'قزوین', 'Qazvin');

INSERT INTO
    provinces(id, fa, en)
values
(26, 'قم', 'Qom');

INSERT INTO
    provinces(id, fa, en)
values
(27, 'سمنان', 'Semnan');

INSERT INTO
    provinces(id, fa, en)
values
(28, 'سیستان و بلوچستان', 'Sistan and Baluchestan');

INSERT INTO
    provinces(id, fa, en)
values
(29, 'تهران', 'Tehran');

INSERT INTO
    provinces(id, fa, en)
values
(30, 'یزد', 'Yazd');

INSERT INTO
    provinces(id, fa, en)
values
(31, 'زنجان', 'Zanjan');