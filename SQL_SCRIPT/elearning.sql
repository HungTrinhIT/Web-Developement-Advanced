-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: localhost    Database: elearning
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` varchar(100) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `catName` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `cat_id` varchar(100) COLLATE utf8mb4_vietnamese_ci DEFAULT NULL,
  `isDeleted` bit(1) NOT NULL DEFAULT b'0',
  `logCreatedDate` datetime DEFAULT NULL,
  `logCreatedBy` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `logUpdatedDate` datetime DEFAULT NULL,
  `logUpdatedBy` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES ('02008524-7ef9-483d-84b7-297cfbece0f2','ReactJS',NULL,_binary '\0','2021-07-25 16:42:01',NULL,NULL,NULL),('19107c0d-6a56-48e6-90d4-55ef5857c1cb','Java',NULL,_binary '\0','2021-07-25 16:43:13',NULL,NULL,NULL),('19b30f77-6b33-4efc-80b6-aaf9437ee702','HTML',NULL,_binary '\0','2021-08-02 18:51:22',NULL,NULL,NULL),('3314f326-2af3-463a-be94-6c8ecab992d6','NodeJS',NULL,_binary '\0','2021-08-02 18:51:07',NULL,NULL,NULL),('767896ec-ed7c-475f-bd02-f15415b9979c','Java Con','19107c0d-6a56-48e6-90d4-55ef5857c1cb',_binary '\0','2021-07-25 16:43:45',NULL,NULL,NULL),('88a90aa2-c894-470d-9c84-676936053d76','React with Redux','02008524-7ef9-483d-84b7-297cfbece0f2',_binary '\0','2021-08-02 18:52:41',NULL,NULL,NULL),('8a53f81e-b736-47c5-8ec9-9917fe6cfecb','JavaScript','8c7b5847-d39e-478d-b8a4-a741ab08b289',_binary '\0','2021-08-02 18:50:33',NULL,NULL,NULL),('8c7b5847-d39e-478d-b8a4-a741ab08b289','WEB APP',NULL,_binary '\0','2021-08-02 18:50:19',NULL,NULL,NULL),('a4db3f72-b28c-489a-b787-61ac372656d1','CSS',NULL,_binary '\0','2021-08-02 18:51:17',NULL,NULL,NULL),('c5498750-b8f9-4a47-b031-7c3fdbfface3','React Hook','02008524-7ef9-483d-84b7-297cfbece0f2',_binary '\0','2021-08-02 18:52:09',NULL,NULL,NULL),('d31e0fc3-322a-4fe3-9d79-b74f8c3ba469','Learn React Code','02008524-7ef9-483d-84b7-297cfbece0f2',_binary '\0','2021-07-25 16:42:13',NULL,NULL,NULL);
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `course`
--

DROP TABLE IF EXISTS `course`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `course` (
  `id` varchar(100) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `courseName` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `category_id` varchar(100) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `teacher_id` int DEFAULT NULL,
  `rate` float DEFAULT NULL,
  `image` varchar(200) COLLATE utf8mb4_vietnamese_ci DEFAULT NULL,
  `price` float NOT NULL,
  `sale` float DEFAULT NULL,
  `saleInfo` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `shortDescription` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `fullDescription` text COLLATE utf8mb4_vietnamese_ci,
  `currentStudent` int DEFAULT NULL,
  `preview` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `view` int NOT NULL DEFAULT '0',
  `isDeleted` bit(1) NOT NULL DEFAULT b'0',
  `logCreatedDate` datetime DEFAULT NULL,
  `logCreatedBy` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `logUpdatedDate` datetime DEFAULT NULL,
  `logUpdatedBy` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `isFinish` bit(1) NOT NULL DEFAULT b'0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course`
--

LOCK TABLES `course` WRITE;
/*!40000 ALTER TABLE `course` DISABLE KEYS */;
INSERT INTO `course` VALUES ('091c4fb1-b351-4507-85ff-26bbaa30ad84','React Simple 123','d31e0fc3-322a-4fe3-9d79-b74f8c3ba469',NULL,NULL,'https://res.cloudinary.com/dawbc3ysp/image/upload/v1627830400/Elearning/dcyvrtknbwyse5jact29.png',200,NULL,'Khong co sale','Test React','<p>React UI<br>React BE<br>Các kiểu</p>',NULL,NULL,6,_binary '\0','2021-07-25 22:54:41',NULL,'2021-08-01 22:06:41',NULL,_binary '\0'),('44a871e4-f964-4376-a8ff-03c3da37e264','React - The Complete Guide (incl Hooks, React Router, Redux)','c5498750-b8f9-4a47-b031-7c3fdbfface3',NULL,NULL,NULL,90,86,'86% saving','Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!','<p>Build powerful, fast, user-friendly and reactive web apps</p><p>Provide amazing user experiences by leveraging the power of JavaScript with ease</p><p>Apply for high-paid jobs or work as a freelancer in one the most-demanded sectors you can find in web dev right now</p><p>Learn all about React Hooks and React</p>',NULL,NULL,0,_binary '','2021-08-02 18:53:54',NULL,'2021-08-02 18:59:36',NULL,_binary '\0'),('6abff208-332b-4c30-9522-17022cd06c0d','JAvaaaaa','767896ec-ed7c-475f-bd02-f15415b9979c',NULL,NULL,NULL,155,10,'fdafdsafdsafdas','fdafdsafdsafdsfds','<p>fdafdsafdafdafdsafdafdafdsafdafdafdsafdafdafdsafdafdafdsafdafdafdsafda</p>',NULL,NULL,7,_binary '\0','2021-07-25 16:44:07',NULL,'2021-07-25 16:44:07',NULL,_binary '\0'),('87cef2c8-ed61-4ca4-a615-ebb6a587091b','Modern React with Redux','88a90aa2-c894-470d-9c84-676936053d76',NULL,NULL,NULL,90,86,'86% saving','Master React and Redux with React Router, Webpack, and Create-React-App. Includes Hooks!','<p>Build amazing single page applications with React JS and Redux</p><p>Master fundamental concepts behind structuring Redux applications</p><p>Realize the power of building composable components</p><p>Be the engineer who explains how Redux works to everyone else, because you know the fundamentals so well</p><p>Become fluent in the toolchain supporting React, including NPM, Webpack, Babel, and ES6/ES2015 Javascript syntax</p>',NULL,NULL,0,_binary '','2021-08-02 18:54:31',NULL,'2021-08-02 18:59:29',NULL,_binary '\0'),('ca0af4f0-94cb-45ee-a0fb-3a3a4830ecfc','React Simple ','d31e0fc3-322a-4fe3-9d79-b74f8c3ba469',NULL,NULL,NULL,100,15,'Sale sap san','React Simple React Simple React Simple React Simple React Simple ','<p>React Simple React Simple React Simple React Simple&nbsp;</p><p>React Simple React Simple React Simple React Simple&nbsp;</p><p>React Simple React Simple React Simple React Simple&nbsp;</p><p>React Simple React Simple React Simple React Simple&nbsp;</p>',NULL,NULL,1,_binary '\0','2021-07-25 16:42:43',NULL,'2021-07-25 16:42:43',NULL,_binary '\0'),('e57ce664-8b9f-4855-a4c6-211f64b49e6a','Advanced React and Redux','88a90aa2-c894-470d-9c84-676936053d76',NULL,NULL,NULL,90,86,'86% saving ','Walkthroughs on advanced React v16.6.3 and Redux v4.0.0 - Authentication, Testing, Middlewares, HOC\'s, and Deployment','<p>Build a scaleable API with authentication using Express, Mongo, and Passport</p><p>Learn the differences between cookie-based and token-based authentication</p><p>Figure out what a Higher Order Component and how to use it to write dramatically less code</p><p>Write Redux middleware from scratch to uncover what is happening behind the scenes with Redux</p><p>Set up your own testing environment with Jest and Enzyme</p><p>Realize the power of building composable components</p>',NULL,NULL,0,_binary '','2021-08-02 18:55:07',NULL,'2021-08-02 18:59:33',NULL,_binary '\0'),('f33f835a-93f5-4acf-bd32-81eb5729438e','React Simple 4','d31e0fc3-322a-4fe3-9d79-b74f8c3ba469',NULL,NULL,NULL,500,0,'Sale 0%','React 4','<p>Test React 4<br>Test React 4 for testing</p>',NULL,NULL,4,_binary '\0','2021-07-25 22:55:24',NULL,'2021-07-25 22:55:24',NULL,_binary '\0');
/*!40000 ALTER TABLE `course` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lesson`
--

DROP TABLE IF EXISTS `lesson`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lesson` (
  `id` varchar(100) NOT NULL,
  `lessonName` varchar(200) NOT NULL,
  `course_id` varchar(100) NOT NULL,
  `isDone` bit(1) NOT NULL DEFAULT b'0',
  `isDeleted` bit(1) NOT NULL DEFAULT b'0',
  `logCreatedBy` varchar(100) DEFAULT NULL,
  `logCreatedDate` varchar(100) DEFAULT NULL,
  `logUpdatedDate` varchar(100) DEFAULT NULL,
  `video` varchar(150) DEFAULT NULL,
  `lessonContent` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lesson`
--

LOCK TABLES `lesson` WRITE;
/*!40000 ALTER TABLE `lesson` DISABLE KEYS */;
INSERT INTO `lesson` VALUES ('02dd19be-d7a0-4b9e-99fb-70b9be25ddbc','React Hook Phan Cuoi','f33f835a-93f5-4acf-bd32-81eb5729438e',_binary '\0',_binary '\0',NULL,'2021-08-01 20:05:45.136','2021-08-01 20:05:45.136',NULL,'Huong Dan Su Dung React Hook'),('08ac0623-4f54-4049-8b92-ac7369195e8b','React JS Bai 6','091c4fb1-b351-4507-85ff-26bbaa30ad84',_binary '\0',_binary '\0',NULL,'2021-08-02 18:41:54.121','2021-08-02 18:42:06.396',NULL,'Lop Hoc ReactJS 123'),('19860722-1e5e-4dbf-a110-1cdcf4ecabb7','Java Ep.4','6abff208-332b-4c30-9522-17022cd06c0d',_binary '\0',_binary '\0',NULL,'2021-08-01 20:04:01.680','2021-08-01 20:04:01.680',NULL,'Lop Hoc Java'),('1ab04555-8f1a-459e-b9a2-72cba6c4c8b3','Java Ep.2','6abff208-332b-4c30-9522-17022cd06c0d',_binary '\0',_binary '\0',NULL,'2021-08-01 20:03:55.413','2021-08-01 20:03:55.413',NULL,'Lop Hoc Java'),('3d3dbb82-a694-4833-835f-fca1b152b186','React JS Bai 1','091c4fb1-b351-4507-85ff-26bbaa30ad84',_binary '\0',_binary '\0',NULL,'2021-08-01 18:59:27.507','2021-08-01 18:59:27.507',NULL,'Lop Hoc React JS'),('45733133-63da-46fb-9843-e8852cb074f6','Gioi thieu React JS','091c4fb1-b351-4507-85ff-26bbaa30ad84',_binary '\0',_binary '\0',NULL,'2021-08-01 18:58:57.508','2021-08-01 18:58:57.508',NULL,'Gioi thieu tong the ve React JS'),('5b23985a-29b1-4a88-8f84-20813c5a94fa','React JS Bai 3','091c4fb1-b351-4507-85ff-26bbaa30ad84',_binary '\0',_binary '\0',NULL,'2021-08-01 18:59:49.495','2021-08-01 18:59:49.495',NULL,'Lop Hoc React JS'),('62cb12ac-eaec-4a3a-a890-f2e865a6a1ee','React JS Bai 2','091c4fb1-b351-4507-85ff-26bbaa30ad84',_binary '\0',_binary '\0',NULL,'2021-08-01 18:59:40.465','2021-08-01 18:59:40.465',NULL,'Lop Hoc React JS'),('828b68a6-262e-45b2-9577-155ee730b57d','ReactJS - Redux P1','ca0af4f0-94cb-45ee-a0fb-3a3a4830ecfc',_binary '\0',_binary '\0',NULL,'2021-08-01 20:04:53.115','2021-08-01 20:04:53.115',NULL,'Lop hoc ket hop Redux vao du an ReactJS'),('8de618e1-892d-479b-a21c-7516965b0f0a','ReactJS - Redux P2','ca0af4f0-94cb-45ee-a0fb-3a3a4830ecfc',_binary '\0',_binary '\0',NULL,'2021-08-01 20:04:56.332','2021-08-01 20:04:56.332',NULL,'Lop hoc ket hop Redux vao du an ReactJS'),('9ae8cfd1-5479-4ebb-b346-11f94464fdbe','Java Ep.1','6abff208-332b-4c30-9522-17022cd06c0d',_binary '\0',_binary '\0',NULL,'2021-08-01 20:03:52.316','2021-08-01 20:03:52.316',NULL,'Lop Hoc Java'),('a3c70505-1c6b-49da-be95-b80ca0b61fd6','React Hook Phan 2','f33f835a-93f5-4acf-bd32-81eb5729438e',_binary '\0',_binary '\0',NULL,'2021-08-01 20:05:41.010','2021-08-01 20:05:41.010',NULL,'Huong Dan Su Dung React Hook'),('abd4bdba-dfc6-4b5d-b012-21adcc83b74b','Java Ep.5','6abff208-332b-4c30-9522-17022cd06c0d',_binary '\0',_binary '\0',NULL,'2021-08-01 20:04:05.793','2021-08-01 20:04:05.793',NULL,'Lop Hoc Java'),('b5baa41b-d89c-4d37-b2c9-daecee9eef0f','React JS Bai 4','091c4fb1-b351-4507-85ff-26bbaa30ad84',_binary '\0',_binary '',NULL,'2021-08-01 19:01:04.885','2021-08-01 19:08:23.428',NULL,'Lop Hoc React JS'),('b620400d-6f4e-4ba9-a849-cab35c9dec63','Java Ep.6','6abff208-332b-4c30-9522-17022cd06c0d',_binary '\0',_binary '\0',NULL,'2021-08-01 20:04:08.914','2021-08-01 20:04:08.914',NULL,'Lop Hoc Java'),('bf245c6b-5e54-44b6-a2ce-3327b1c2d318','ReactJS - Redux','ca0af4f0-94cb-45ee-a0fb-3a3a4830ecfc',_binary '\0',_binary '\0',NULL,'2021-08-01 20:04:45.344','2021-08-01 20:04:45.344',NULL,'Lop hoc ket hop Redux vao du an ReactJS'),('c6cbdfe6-76ea-458a-a8d5-88343773ae40','React Hook','f33f835a-93f5-4acf-bd32-81eb5729438e',_binary '\0',_binary '\0',NULL,'2021-08-01 20:05:32.968','2021-08-01 20:05:32.968',NULL,'Huong Dan Su Dung React Hook'),('dfdb19b3-63b9-4d03-8b73-a59372c93563','Java Ep.3','6abff208-332b-4c30-9522-17022cd06c0d',_binary '\0',_binary '\0',NULL,'2021-08-01 20:03:58.173','2021-08-01 20:03:58.173',NULL,'Lop Hoc Java'),('e282481c-d33f-4fc4-84fb-438e190d3a39','React JS Bai 4','091c4fb1-b351-4507-85ff-26bbaa30ad84',_binary '\0',_binary '\0',NULL,'2021-08-01 19:08:36.277','2021-08-01 19:09:49.054',NULL,'Lop Hoc React JS Fixed'),('e8cffecd-0e17-453e-9e3e-94439c86c36b','React JS Bai 5','091c4fb1-b351-4507-85ff-26bbaa30ad84',_binary '\0',_binary '\0',NULL,'2021-08-02 18:15:46.861','2021-08-02 18:32:49.854',NULL,'Lop Hoc ReactJS 123'),('e9998a56-fc79-424a-b802-a185d9c21683','Gioi Thieu Java','6abff208-332b-4c30-9522-17022cd06c0d',_binary '\0',_binary '\0',NULL,'2021-08-01 20:03:37.715','2021-08-01 20:03:37.715',NULL,'Lop Hoc Java');
/*!40000 ALTER TABLE `lesson` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wishlist`
--

DROP TABLE IF EXISTS `wishlist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wishlist` (
  `id` varchar(100) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `course_id` varchar(100) COLLATE utf8mb4_vietnamese_ci DEFAULT NULL,
  `user_id` varchar(100) COLLATE utf8mb4_vietnamese_ci DEFAULT NULL,
  `isDeleted` bit(1) NOT NULL DEFAULT b'0',
  `logCreatedDate` datetime DEFAULT NULL,
  `logCreatedBy` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `logUpdatedDate` datetime DEFAULT NULL,
  `logUpdatedBy` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wishlist`
--

LOCK TABLES `wishlist` WRITE;
/*!40000 ALTER TABLE `wishlist` DISABLE KEYS */;
INSERT INTO `wishlist` VALUES ('1','091c4fb1-b351-4507-85ff-26bbaa30ad84','1',_binary '',NULL,NULL,'2021-08-01 15:10:41',NULL),('10','f33f835a-93f5-4acf-bd32-81eb5729438e','3',_binary '\0',NULL,NULL,NULL,NULL),('11','f33f835a-93f5-4acf-bd32-81eb5729438e','2',_binary '\0',NULL,NULL,NULL,NULL),('12','f33f835a-93f5-4acf-bd32-81eb5729438e','1',_binary '\0',NULL,NULL,NULL,NULL),('13','091c4fb1-b351-4507-85ff-26bbaa30ad84','1',_binary '\0',NULL,NULL,NULL,NULL),('14','6abff208-332b-4c30-9522-17022cd06c0d','1',_binary '\0',NULL,NULL,NULL,NULL),('15','ca0af4f0-94cb-45ee-a0fb-3a3a4830ecfc','1',_binary '\0',NULL,NULL,NULL,NULL),('2','091c4fb1-b351-4507-85ff-26bbaa30ad84','2',_binary '\0',NULL,NULL,NULL,NULL),('3','6abff208-332b-4c30-9522-17022cd06c0d','1',_binary '',NULL,NULL,'2021-08-01 15:10:39',NULL),('4','6abff208-332b-4c30-9522-17022cd06c0d','3',_binary '\0',NULL,NULL,NULL,NULL),('5','ca0af4f0-94cb-45ee-a0fb-3a3a4830ecfc','1',_binary '',NULL,NULL,'2021-08-01 15:10:10',NULL),('6','f33f835a-93f5-4acf-bd32-81eb5729438e','2',_binary '\0',NULL,NULL,NULL,NULL),('7','f33f835a-93f5-4acf-bd32-81eb5729438e','3',_binary '\0',NULL,NULL,NULL,NULL),('8','f33f835a-93f5-4acf-bd32-81eb5729438e','1',_binary '',NULL,NULL,'2021-08-01 15:07:23',NULL),('9','f33f835a-93f5-4acf-bd32-81eb5729438e','2',_binary '',NULL,NULL,'2021-08-01 14:47:29',NULL);
/*!40000 ALTER TABLE `wishlist` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-08-02 19:49:13
