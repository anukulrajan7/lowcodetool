import { MigrationInterface, QueryRunner } from 'typeorm'

export class Script1702311247028 implements MigrationInterface {
  name = 'Script1702311247028'

  public async up(queryRunner: QueryRunner): Promise<void> {
    try {
      await queryRunner.query(
        `
        INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('9adb9600-c95a-4cad-8303-f4fed6a613d1', '1Abbigail_Monahan7@gmail.com', 'Dr. Vikram Patel', 'https://i.imgur.com/YfJQV5z.png?id=3', 'cus_K6L7M8N9O0P1Q2', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('9e588bc9-f710-4774-832d-eb810eab2e69', '8Nova.Sanford93@yahoo.com', 'Dr. Rahul Sharma', 'https://i.imgur.com/YfJQV5z.png?id=10', 'cus_J5K9Q8W7X6Y5Z4', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('cb5a8f7d-e2a2-49aa-8aee-dcf399c216cb', '15Landen.Connelly60@yahoo.com', 'Dr. Vikram Patel', 'https://i.imgur.com/YfJQV5z.png?id=17', 'cus_A1B2C3D4E5F6G7', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('14377fcd-eed8-4633-9a08-483644cd599c', '29Keven_Heidenreich@gmail.com', 'Dr. Jane Doe', 'https://i.imgur.com/YfJQV5z.png?id=31', 'cus_J5K9Q8W7X6Y5Z4', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('755778a6-9d62-4668-98ed-62136287a3db', '36Albert_Halvorson82@yahoo.com', 'Dr. Anita Kapoor', 'https://i.imgur.com/YfJQV5z.png?id=38', 'cus_K6L7M8N9O0P1Q2', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('bcf1d020-4233-4f1d-bc39-b9f11d7de43f', '43Allen.Rath@gmail.com', 'Dr. Rahul Sharma', 'https://i.imgur.com/YfJQV5z.png?id=45', 'cus_O5P6Q7R8S9T0U1', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('71a80350-6c56-405c-8a43-fff560afdd08', '50Jesus_Cummings39@gmail.com', 'Dr. Anita Kapoor', 'https://i.imgur.com/YfJQV5z.png?id=52', 'cus_H8I9J0K1L2M3N4', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('cf4e335e-3fec-467b-945f-0fdbaa094b56', '57Hyman.Ferry67@gmail.com', 'Dr. Vikram Patel', 'https://i.imgur.com/YfJQV5z.png?id=59', 'cus_A1B2C3D4E5F6G7', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('aea2b5ef-41dc-4b84-968e-f7786e98f366', '64Ansel.Koepp@gmail.com', 'Dr. Jane Doe', 'https://i.imgur.com/YfJQV5z.png?id=66', 'cus_O5P6Q7R8S9T0U1', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('7b0cd839-3e3a-4ab9-a86d-f4b8e63754bb', 'Group Update', 'Dr. Sharma has sent you a connection request.', 'Dr. Sharma', '74Dejah_Bernhard@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=75', 'https://i.imgur.com/YfJQV5z.png?id=76', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('6ee09db4-32ab-4049-ac6c-8afaa6cb0010', 'Profile View Alert', 'You have received a new message from Dr. Mehta.', 'Dr. Sharma', '81Janet5@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=82', 'https://i.imgur.com/YfJQV5z.png?id=83', 'cf4e335e-3fec-467b-945f-0fdbaa094b56');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('ffbc196e-64b8-450e-b067-00e65518567a', 'Profile View Alert', 'Dr. Sharma has sent you a connection request.', 'Dr. Patel', '88Twila36@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=89', 'https://i.imgur.com/YfJQV5z.png?id=90', 'aea2b5ef-41dc-4b84-968e-f7786e98f366');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('c4b66428-ad62-4c11-bddf-650ccbc24a18', 'New Connection Request', 'You are invited to the Annual Healthcare Conference.', 'Dr. Sharma', '95Arthur_Larkin38@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=96', 'https://i.imgur.com/YfJQV5z.png?id=97', 'aea2b5ef-41dc-4b84-968e-f7786e98f366');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('1e9d9702-9c55-4dda-8b70-c8c8a8aa4eca', 'Group Update', 'The Cardiology Group has a new update.', 'Dr. Kapoor', '102Simone41@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=103', 'https://i.imgur.com/YfJQV5z.png?id=104', 'cf4e335e-3fec-467b-945f-0fdbaa094b56');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('eebdeeb8-c970-449e-a09d-5d34c6244688', 'New Message Received', 'You have received a new message from Dr. Mehta.', 'Dr. Singh', '109Tania.Cole@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=110', 'https://i.imgur.com/YfJQV5z.png?id=111', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('722b715b-49eb-416b-abc6-9fb554b09957', 'New Connection Request', 'Dr. Sharma has sent you a connection request.', 'Dr. Sharma', '116Hilario_Legros@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=117', 'https://i.imgur.com/YfJQV5z.png?id=118', '9adb9600-c95a-4cad-8303-f4fed6a613d1');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('6d79fadb-9991-463c-8d79-2b9957447a47', 'Group Update', 'You have received a new message from Dr. Mehta.', 'Dr. Kapoor', '123Vallie_Larkin@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=124', 'https://i.imgur.com/YfJQV5z.png?id=125', 'bcf1d020-4233-4f1d-bc39-b9f11d7de43f');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('a58aaecf-f01a-4f5e-9a6f-36c0a10af2d1', 'Event Invitation', 'Your profile was viewed by Dr. Kapoor.', 'Dr. Singh', '130Camylle_Toy61@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=131', 'https://i.imgur.com/YfJQV5z.png?id=132', '755778a6-9d62-4668-98ed-62136287a3db');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('4fed5e29-41cc-42f6-8d2a-13a6f0520fbb', 'Event Invitation', 'Dr. Sharma has sent you a connection request.', 'Dr. Mehta', '137Alfreda.Cremin@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=138', 'https://i.imgur.com/YfJQV5z.png?id=139', '9e588bc9-f710-4774-832d-eb810eab2e69');

INSERT INTO "profile_picture" ("id", "url", "userId") VALUES ('78f59e12-34c2-4fe7-b0e8-9a318b311ac5', 'https://i.imgur.com/YfJQV5z.png?id=141', 'aea2b5ef-41dc-4b84-968e-f7786e98f366');
INSERT INTO "profile_picture" ("id", "url", "userId") VALUES ('08fb0ef7-93d5-4bea-87ed-160a96e2c4e5', 'https://i.imgur.com/YfJQV5z.png?id=143', '14377fcd-eed8-4633-9a08-483644cd599c');
INSERT INTO "profile_picture" ("id", "url", "userId") VALUES ('1904afee-0660-49ee-96b2-15dca46f4d5b', 'https://i.imgur.com/YfJQV5z.png?id=145', 'cb5a8f7d-e2a2-49aa-8aee-dcf399c216cb');
INSERT INTO "profile_picture" ("id", "url", "userId") VALUES ('b29f52b2-513e-40fa-9628-4af8cf11513b', 'https://i.imgur.com/YfJQV5z.png?id=147', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "profile_picture" ("id", "url", "userId") VALUES ('a81f2f3e-9c30-4cf5-bf54-b360d0aedbed', 'https://i.imgur.com/YfJQV5z.png?id=149', 'bcf1d020-4233-4f1d-bc39-b9f11d7de43f');
INSERT INTO "profile_picture" ("id", "url", "userId") VALUES ('5365bd2e-a0dc-4a87-9f04-5de96813ff76', 'https://i.imgur.com/YfJQV5z.png?id=151', 'bcf1d020-4233-4f1d-bc39-b9f11d7de43f');
INSERT INTO "profile_picture" ("id", "url", "userId") VALUES ('de9a7c13-9b59-431d-ab19-bea10cc1ef72', 'https://i.imgur.com/YfJQV5z.png?id=153', 'cf4e335e-3fec-467b-945f-0fdbaa094b56');
INSERT INTO "profile_picture" ("id", "url", "userId") VALUES ('df8613e6-ab3c-428f-9041-87283c1464b5', 'https://i.imgur.com/YfJQV5z.png?id=155', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "profile_picture" ("id", "url", "userId") VALUES ('456c98da-4335-4a9c-b4f1-a0fb9d4039a5', 'https://i.imgur.com/YfJQV5z.png?id=157', 'aea2b5ef-41dc-4b84-968e-f7786e98f366');
INSERT INTO "profile_picture" ("id", "url", "userId") VALUES ('f140a40c-09d5-44aa-8b60-b17318b72e58', 'https://i.imgur.com/YfJQV5z.png?id=159', 'bcf1d020-4233-4f1d-bc39-b9f11d7de43f');

INSERT INTO "cover_photo" ("id", "url", "userId") VALUES ('3f6d4f3c-aad5-4607-88c0-4ecdb24ba77c', 'https://i.imgur.com/YfJQV5z.png?id=161', 'cb5a8f7d-e2a2-49aa-8aee-dcf399c216cb');
INSERT INTO "cover_photo" ("id", "url", "userId") VALUES ('f9a3b465-141d-4894-9c93-4fc226c9d4d4', 'https://i.imgur.com/YfJQV5z.png?id=163', '9adb9600-c95a-4cad-8303-f4fed6a613d1');
INSERT INTO "cover_photo" ("id", "url", "userId") VALUES ('555875ec-d77b-47f0-8bfe-bc6dec0a80ce', 'https://i.imgur.com/YfJQV5z.png?id=165', 'cf4e335e-3fec-467b-945f-0fdbaa094b56');
INSERT INTO "cover_photo" ("id", "url", "userId") VALUES ('b46cb765-9376-4f9c-9a0f-0b81e62146b1', 'https://i.imgur.com/YfJQV5z.png?id=167', '14377fcd-eed8-4633-9a08-483644cd599c');
INSERT INTO "cover_photo" ("id", "url", "userId") VALUES ('b1135e47-d949-491d-a29c-836a752bf631', 'https://i.imgur.com/YfJQV5z.png?id=169', '9e588bc9-f710-4774-832d-eb810eab2e69');
INSERT INTO "cover_photo" ("id", "url", "userId") VALUES ('fc7664a9-4510-4882-ba4c-8d8176b1f0c9', 'https://i.imgur.com/YfJQV5z.png?id=171', 'cb5a8f7d-e2a2-49aa-8aee-dcf399c216cb');
INSERT INTO "cover_photo" ("id", "url", "userId") VALUES ('5ee45e83-58bd-407a-a35d-a1451202560c', 'https://i.imgur.com/YfJQV5z.png?id=173', 'aea2b5ef-41dc-4b84-968e-f7786e98f366');
INSERT INTO "cover_photo" ("id", "url", "userId") VALUES ('d0bb2c51-0c17-4474-b350-f355d9e6322c', 'https://i.imgur.com/YfJQV5z.png?id=175', 'cb5a8f7d-e2a2-49aa-8aee-dcf399c216cb');
INSERT INTO "cover_photo" ("id", "url", "userId") VALUES ('ddd928f9-60ae-4342-90cc-052c25eb88fc', 'https://i.imgur.com/YfJQV5z.png?id=177', 'bcf1d020-4233-4f1d-bc39-b9f11d7de43f');
INSERT INTO "cover_photo" ("id", "url", "userId") VALUES ('b91b18c3-24c5-4480-bd28-f753acff0655', 'https://i.imgur.com/YfJQV5z.png?id=179', '71a80350-6c56-405c-8a43-fff560afdd08');

INSERT INTO "post_data" ("id", "content", "type", "userId") VALUES ('79a21495-f47d-44be-9add-7eede5948d3f', 'Excited to attend the upcoming medical conference in Mumbai', 'photo', '14377fcd-eed8-4633-9a08-483644cd599c');
INSERT INTO "post_data" ("id", "content", "type", "userId") VALUES ('0a7bc922-13e4-4876-a1c8-1790144857c6', 'Just published a new research paper on cardiology. Check it out', 'photo', '14377fcd-eed8-4633-9a08-483644cd599c');
INSERT INTO "post_data" ("id", "content", "type", "userId") VALUES ('35b9aa03-9c96-4ce6-a425-243ad460686d', 'Looking for recommendations on the best practices for patient care.', 'text', '14377fcd-eed8-4633-9a08-483644cd599c');
INSERT INTO "post_data" ("id", "content", "type", "userId") VALUES ('449028db-48cc-45b9-bc2a-9f8fd22c1e40', 'Just published a new research paper on cardiology. Check it out', 'text', '14377fcd-eed8-4633-9a08-483644cd599c');
INSERT INTO "post_data" ("id", "content", "type", "userId") VALUES ('99090f3c-44f7-4f47-9738-3f2edf901b19', 'Just published a new research paper on cardiology. Check it out', 'photo', '9adb9600-c95a-4cad-8303-f4fed6a613d1');
INSERT INTO "post_data" ("id", "content", "type", "userId") VALUES ('38743af5-32fc-494a-93b6-7aceca5967f4', 'Sharing some insights from my recent workshop on mental health awareness.', 'text', '14377fcd-eed8-4633-9a08-483644cd599c');
INSERT INTO "post_data" ("id", "content", "type", "userId") VALUES ('0405bd46-7d15-42a5-8c25-16746133c22a', 'Sharing some insights from my recent workshop on mental health awareness.', 'photo', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "post_data" ("id", "content", "type", "userId") VALUES ('dc6da1c1-8829-45d5-aad7-a88a3458a89d', 'Sharing some insights from my recent workshop on mental health awareness.', 'photo', '9e588bc9-f710-4774-832d-eb810eab2e69');
INSERT INTO "post_data" ("id", "content", "type", "userId") VALUES ('423c43f3-161e-4072-9263-e5ddc2b6c77d', 'Excited to attend the upcoming medical conference in Mumbai', 'photo', 'bcf1d020-4233-4f1d-bc39-b9f11d7de43f');
INSERT INTO "post_data" ("id", "content", "type", "userId") VALUES ('6afbdaa0-549e-44c4-b208-e51bd6f15131', 'Just published a new research paper on cardiology. Check it out', 'text', '9adb9600-c95a-4cad-8303-f4fed6a613d1');

INSERT INTO "photo" ("id", "url", "postId") VALUES ('92e82e97-3162-4e02-9788-ad4f7ca4fefa', 'https://i.imgur.com/YfJQV5z.png?id=211', '38743af5-32fc-494a-93b6-7aceca5967f4');
INSERT INTO "photo" ("id", "url", "postId") VALUES ('fc74252c-8da1-425a-88ea-1c96e812105e', 'https://i.imgur.com/YfJQV5z.png?id=213', '38743af5-32fc-494a-93b6-7aceca5967f4');
INSERT INTO "photo" ("id", "url", "postId") VALUES ('872067be-8486-4a66-af1d-81fd7b398ff2', 'https://i.imgur.com/YfJQV5z.png?id=215', '79a21495-f47d-44be-9add-7eede5948d3f');
INSERT INTO "photo" ("id", "url", "postId") VALUES ('fc2cc634-f4fb-4ed2-9d2a-0ae6d6f4e270', 'https://i.imgur.com/YfJQV5z.png?id=217', '0405bd46-7d15-42a5-8c25-16746133c22a');
INSERT INTO "photo" ("id", "url", "postId") VALUES ('5195e4a7-8c35-46a1-b269-6b4e953035e2', 'https://i.imgur.com/YfJQV5z.png?id=219', '449028db-48cc-45b9-bc2a-9f8fd22c1e40');
INSERT INTO "photo" ("id", "url", "postId") VALUES ('eefe9dee-76ee-45f4-babd-1f259875085f', 'https://i.imgur.com/YfJQV5z.png?id=221', '79a21495-f47d-44be-9add-7eede5948d3f');
INSERT INTO "photo" ("id", "url", "postId") VALUES ('1db8dcc4-c06d-48e6-bcda-65317a893176', 'https://i.imgur.com/YfJQV5z.png?id=223', '38743af5-32fc-494a-93b6-7aceca5967f4');
INSERT INTO "photo" ("id", "url", "postId") VALUES ('6110bfec-39a5-4a0a-b322-52f0a912b123', 'https://i.imgur.com/YfJQV5z.png?id=225', '423c43f3-161e-4072-9263-e5ddc2b6c77d');
INSERT INTO "photo" ("id", "url", "postId") VALUES ('bec7544a-f775-4a47-808f-d7529f8dcd97', 'https://i.imgur.com/YfJQV5z.png?id=227', '79a21495-f47d-44be-9add-7eede5948d3f');
INSERT INTO "photo" ("id", "url", "postId") VALUES ('43d54fd4-b063-4e1e-a554-120904897414', 'https://i.imgur.com/YfJQV5z.png?id=229', '38743af5-32fc-494a-93b6-7aceca5967f4');

INSERT INTO "like" ("id", "userId", "postId") VALUES ('8a128b42-a137-4733-93fc-b0d58f123444', 'aea2b5ef-41dc-4b84-968e-f7786e98f366', '0405bd46-7d15-42a5-8c25-16746133c22a');
INSERT INTO "like" ("id", "userId", "postId") VALUES ('af455d1a-9c20-4915-a6b5-e257bd784a07', 'bcf1d020-4233-4f1d-bc39-b9f11d7de43f', '0a7bc922-13e4-4876-a1c8-1790144857c6');
INSERT INTO "like" ("id", "userId", "postId") VALUES ('4ab80109-66f4-4ca8-a9ae-9b2110bba194', 'aea2b5ef-41dc-4b84-968e-f7786e98f366', '0405bd46-7d15-42a5-8c25-16746133c22a');
INSERT INTO "like" ("id", "userId", "postId") VALUES ('12c0c630-a6f2-49fd-a2cd-5208eb7011fd', 'aea2b5ef-41dc-4b84-968e-f7786e98f366', '35b9aa03-9c96-4ce6-a425-243ad460686d');
INSERT INTO "like" ("id", "userId", "postId") VALUES ('de785f76-55c8-45fd-9301-5cf60006e637', '755778a6-9d62-4668-98ed-62136287a3db', '449028db-48cc-45b9-bc2a-9f8fd22c1e40');
INSERT INTO "like" ("id", "userId", "postId") VALUES ('39b91602-d3fb-4cc6-b7f5-43321d672fa0', 'cf4e335e-3fec-467b-945f-0fdbaa094b56', '6afbdaa0-549e-44c4-b208-e51bd6f15131');
INSERT INTO "like" ("id", "userId", "postId") VALUES ('ac5bcc40-7d20-4d99-a10e-294a36de9360', '9adb9600-c95a-4cad-8303-f4fed6a613d1', '35b9aa03-9c96-4ce6-a425-243ad460686d');
INSERT INTO "like" ("id", "userId", "postId") VALUES ('3b41211e-4821-4761-af40-3a1e3d48bfe9', 'cb5a8f7d-e2a2-49aa-8aee-dcf399c216cb', '35b9aa03-9c96-4ce6-a425-243ad460686d');
INSERT INTO "like" ("id", "userId", "postId") VALUES ('f324186f-cca2-450d-ae8b-eccbc4557b0c', 'cf4e335e-3fec-467b-945f-0fdbaa094b56', '79a21495-f47d-44be-9add-7eede5948d3f');
INSERT INTO "like" ("id", "userId", "postId") VALUES ('58c92df4-bd98-42c7-ac1b-7517b4d69537', '755778a6-9d62-4668-98ed-62136287a3db', '38743af5-32fc-494a-93b6-7aceca5967f4');

INSERT INTO "comment" ("id", "content", "userId", "postId") VALUES ('75087099-5829-44b5-b39c-91095b889dfb', 'Thanks for sharing this information.', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '35b9aa03-9c96-4ce6-a425-243ad460686d');
INSERT INTO "comment" ("id", "content", "userId", "postId") VALUES ('23bfaf4e-91c0-4623-9f36-b3b39feff63c', 'I completely agree with your point.', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '35b9aa03-9c96-4ce6-a425-243ad460686d');
INSERT INTO "comment" ("id", "content", "userId", "postId") VALUES ('bd23b4b5-313c-4ab5-bd01-b8d5fa5f8e60', 'Can you provide more details on this topic', '9e588bc9-f710-4774-832d-eb810eab2e69', '0a7bc922-13e4-4876-a1c8-1790144857c6');
INSERT INTO "comment" ("id", "content", "userId", "postId") VALUES ('c7119c7c-bec4-403e-875b-ae9b30ee80ee', 'Great update looking forward to more', '9adb9600-c95a-4cad-8303-f4fed6a613d1', '449028db-48cc-45b9-bc2a-9f8fd22c1e40');
INSERT INTO "comment" ("id", "content", "userId", "postId") VALUES ('73afb272-7277-4609-89a1-f7a701e34197', 'Thanks for sharing this information.', 'bcf1d020-4233-4f1d-bc39-b9f11d7de43f', '0a7bc922-13e4-4876-a1c8-1790144857c6');
INSERT INTO "comment" ("id", "content", "userId", "postId") VALUES ('6f404764-2070-4d13-bfb1-6cac60a9a71d', 'Great update looking forward to more', 'cb5a8f7d-e2a2-49aa-8aee-dcf399c216cb', '6afbdaa0-549e-44c4-b208-e51bd6f15131');
INSERT INTO "comment" ("id", "content", "userId", "postId") VALUES ('835c971c-2d0d-451e-932a-3dff8b015a75', 'Can you provide more details on this topic', 'cf4e335e-3fec-467b-945f-0fdbaa094b56', '6afbdaa0-549e-44c4-b208-e51bd6f15131');
INSERT INTO "comment" ("id", "content", "userId", "postId") VALUES ('5604469b-08bb-4730-ac2e-5e10bdd8d17f', 'This is a very insightful post', 'cb5a8f7d-e2a2-49aa-8aee-dcf399c216cb', 'dc6da1c1-8829-45d5-aad7-a88a3458a89d');
INSERT INTO "comment" ("id", "content", "userId", "postId") VALUES ('a4309823-05a2-4e08-aed8-3dc5d97a87b0', 'This is a very insightful post', '755778a6-9d62-4668-98ed-62136287a3db', '423c43f3-161e-4072-9263-e5ddc2b6c77d');
INSERT INTO "comment" ("id", "content", "userId", "postId") VALUES ('2b11b597-dd08-42bd-829f-20953e59eb5f', 'Great update looking forward to more', '14377fcd-eed8-4633-9a08-483644cd599c', '35b9aa03-9c96-4ce6-a425-243ad460686d');

INSERT INTO "connection" ("id", "status", "requesterId", "receiverId") VALUES ('742cebbb-e01f-46a4-be4d-b12a0f4d7a39', 'accepted', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '9e588bc9-f710-4774-832d-eb810eab2e69');
INSERT INTO "connection" ("id", "status", "requesterId", "receiverId") VALUES ('0a194c34-f5b5-4034-b601-b68a820fe136', 'rejected', '71a80350-6c56-405c-8a43-fff560afdd08', '755778a6-9d62-4668-98ed-62136287a3db');
INSERT INTO "connection" ("id", "status", "requesterId", "receiverId") VALUES ('8072d2f1-a480-411b-8cca-8b3c05617809', 'pending', '755778a6-9d62-4668-98ed-62136287a3db', 'bcf1d020-4233-4f1d-bc39-b9f11d7de43f');
INSERT INTO "connection" ("id", "status", "requesterId", "receiverId") VALUES ('81a590d7-660c-40b6-8806-edd61e20924d', 'removed', 'bcf1d020-4233-4f1d-bc39-b9f11d7de43f', '9e588bc9-f710-4774-832d-eb810eab2e69');
INSERT INTO "connection" ("id", "status", "requesterId", "receiverId") VALUES ('bd86d7f2-9cd1-41c1-9983-e3232333d676', 'rejected', 'aea2b5ef-41dc-4b84-968e-f7786e98f366', 'aea2b5ef-41dc-4b84-968e-f7786e98f366');
INSERT INTO "connection" ("id", "status", "requesterId", "receiverId") VALUES ('307f07c4-548a-4de8-b0fe-f1ee87dfc7f8', 'accepted', '9e588bc9-f710-4774-832d-eb810eab2e69', '9adb9600-c95a-4cad-8303-f4fed6a613d1');
INSERT INTO "connection" ("id", "status", "requesterId", "receiverId") VALUES ('21ec37f6-1d2d-46e4-9afe-fdefdc596615', 'blocked', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '14377fcd-eed8-4633-9a08-483644cd599c');
INSERT INTO "connection" ("id", "status", "requesterId", "receiverId") VALUES ('a7e73daa-33d7-4cac-9ae3-2b3f11ad601f', 'rejected', '71a80350-6c56-405c-8a43-fff560afdd08', '9e588bc9-f710-4774-832d-eb810eab2e69');
INSERT INTO "connection" ("id", "status", "requesterId", "receiverId") VALUES ('665b20f9-28cb-4856-a541-7108a698cde9', 'blocked', '71a80350-6c56-405c-8a43-fff560afdd08', '14377fcd-eed8-4633-9a08-483644cd599c');
INSERT INTO "connection" ("id", "status", "requesterId", "receiverId") VALUES ('ddf57c82-96cb-4462-b135-290ed52fbe4f', 'blocked', '71a80350-6c56-405c-8a43-fff560afdd08', '71a80350-6c56-405c-8a43-fff560afdd08');

INSERT INTO "group" ("id", "name", "description") VALUES ('5d94c3aa-e54b-4c4c-bb6d-6aba4a88d903', 'Orthopedic Surgeons Hub', 'Connecting pediatricians to share insights and best practices.');
INSERT INTO "group" ("id", "name", "description") VALUES ('f66c5543-20b5-4daa-8ab6-0607c91e4a8a', 'Cardiology Experts', 'A group for cardiologists to discuss the latest advancements and case studies.');
INSERT INTO "group" ("id", "name", "description") VALUES ('be61c0ef-0c46-4bc5-a472-4d2116ef45f4', 'Orthopedic Surgeons Hub', 'A network for neurology professionals to discuss research and treatments.');
INSERT INTO "group" ("id", "name", "description") VALUES ('31899448-8279-4e75-bc6b-da4e165dcebf', 'Orthopedic Surgeons Hub', 'Connecting pediatricians to share insights and best practices.');
INSERT INTO "group" ("id", "name", "description") VALUES ('96fc68c0-e0eb-4afe-a01b-ee93e2838d43', 'Orthopedic Surgeons Hub', 'A hub for orthopedic surgeons to collaborate and share knowledge.');
INSERT INTO "group" ("id", "name", "description") VALUES ('4591577e-be3c-4b7c-a053-4ff3bab5c781', 'Dermatology Specialists', 'A group for cardiologists to discuss the latest advancements and case studies.');
INSERT INTO "group" ("id", "name", "description") VALUES ('57faea98-c9a9-4283-af5d-975a9a2c229b', 'Orthopedic Surgeons Hub', 'A network for neurology professionals to discuss research and treatments.');
INSERT INTO "group" ("id", "name", "description") VALUES ('adf74f0a-632b-406d-8776-d3f741ab0ad6', 'Pediatricians Network', 'A hub for orthopedic surgeons to collaborate and share knowledge.');
INSERT INTO "group" ("id", "name", "description") VALUES ('361048a2-631b-4ea7-a3a1-c5c5ff239a6f', 'Dermatology Specialists', 'A group for cardiologists to discuss the latest advancements and case studies.');
INSERT INTO "group" ("id", "name", "description") VALUES ('621a88d6-efc0-4ed4-94f4-df109709751b', 'Pediatricians Network', 'A hub for orthopedic surgeons to collaborate and share knowledge.');

INSERT INTO "group_membership" ("id", "userId", "groupId") VALUES ('3ef18fa4-ac59-4757-8595-488e744ea55d', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '4591577e-be3c-4b7c-a053-4ff3bab5c781');
INSERT INTO "group_membership" ("id", "userId", "groupId") VALUES ('0527c0b7-9459-4a74-8a77-39dc177edf0d', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '57faea98-c9a9-4283-af5d-975a9a2c229b');
INSERT INTO "group_membership" ("id", "userId", "groupId") VALUES ('914328e9-4cbe-43a3-962d-c7fa516b82be', '71a80350-6c56-405c-8a43-fff560afdd08', 'be61c0ef-0c46-4bc5-a472-4d2116ef45f4');
INSERT INTO "group_membership" ("id", "userId", "groupId") VALUES ('145560e8-86fd-4efc-bcab-f95af1866725', '9adb9600-c95a-4cad-8303-f4fed6a613d1', 'adf74f0a-632b-406d-8776-d3f741ab0ad6');
INSERT INTO "group_membership" ("id", "userId", "groupId") VALUES ('eb5a57a1-82eb-45e3-b14e-f1352a8e6670', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '57faea98-c9a9-4283-af5d-975a9a2c229b');
INSERT INTO "group_membership" ("id", "userId", "groupId") VALUES ('4509142e-5325-4296-bb9e-1ec99911e8b9', 'cf4e335e-3fec-467b-945f-0fdbaa094b56', '4591577e-be3c-4b7c-a053-4ff3bab5c781');
INSERT INTO "group_membership" ("id", "userId", "groupId") VALUES ('9db4fa4d-a67f-4023-a972-f19c4bdc143d', 'cb5a8f7d-e2a2-49aa-8aee-dcf399c216cb', '4591577e-be3c-4b7c-a053-4ff3bab5c781');
INSERT INTO "group_membership" ("id", "userId", "groupId") VALUES ('1e5cf4a1-dc5a-4ea7-99a5-6c1e501c3986', '14377fcd-eed8-4633-9a08-483644cd599c', 'f66c5543-20b5-4daa-8ab6-0607c91e4a8a');
INSERT INTO "group_membership" ("id", "userId", "groupId") VALUES ('dff0e265-2dc1-4e4a-9ff2-b327d03c9e09', 'cf4e335e-3fec-467b-945f-0fdbaa094b56', 'be61c0ef-0c46-4bc5-a472-4d2116ef45f4');
INSERT INTO "group_membership" ("id", "userId", "groupId") VALUES ('4b5e6205-99fa-4596-bd06-99fc71ab12e7', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'be61c0ef-0c46-4bc5-a472-4d2116ef45f4');
    `,
      )
    } catch (error) {
      // ignore
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
