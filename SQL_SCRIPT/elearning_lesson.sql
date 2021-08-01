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
INSERT INTO `lesson` VALUES ('02dd19be-d7a0-4b9e-99fb-70b9be25ddbc','React Hook Phan Cuoi','f33f835a-93f5-4acf-bd32-81eb5729438e',_binary '\0',_binary '\0',NULL,'2021-08-01 20:05:45.136','2021-08-01 20:05:45.136',NULL,'Huong Dan Su Dung React Hook'),('19860722-1e5e-4dbf-a110-1cdcf4ecabb7','Java Ep.4','6abff208-332b-4c30-9522-17022cd06c0d',_binary '\0',_binary '\0',NULL,'2021-08-01 20:04:01.680','2021-08-01 20:04:01.680',NULL,'Lop Hoc Java'),('1ab04555-8f1a-459e-b9a2-72cba6c4c8b3','Java Ep.2','6abff208-332b-4c30-9522-17022cd06c0d',_binary '\0',_binary '\0',NULL,'2021-08-01 20:03:55.413','2021-08-01 20:03:55.413',NULL,'Lop Hoc Java'),('3d3dbb82-a694-4833-835f-fca1b152b186','React JS Bai 1','091c4fb1-b351-4507-85ff-26bbaa30ad84',_binary '\0',_binary '\0',NULL,'2021-08-01 18:59:27.507','2021-08-01 18:59:27.507',NULL,'Lop Hoc React JS'),('45733133-63da-46fb-9843-e8852cb074f6','Gioi thieu React JS','091c4fb1-b351-4507-85ff-26bbaa30ad84',_binary '\0',_binary '\0',NULL,'2021-08-01 18:58:57.508','2021-08-01 18:58:57.508',NULL,'Gioi thieu tong the ve React JS'),('5b23985a-29b1-4a88-8f84-20813c5a94fa','React JS Bai 3','091c4fb1-b351-4507-85ff-26bbaa30ad84',_binary '\0',_binary '\0',NULL,'2021-08-01 18:59:49.495','2021-08-01 18:59:49.495',NULL,'Lop Hoc React JS'),('62cb12ac-eaec-4a3a-a890-f2e865a6a1ee','React JS Bai 2','091c4fb1-b351-4507-85ff-26bbaa30ad84',_binary '\0',_binary '\0',NULL,'2021-08-01 18:59:40.465','2021-08-01 18:59:40.465',NULL,'Lop Hoc React JS'),('828b68a6-262e-45b2-9577-155ee730b57d','ReactJS - Redux P1','ca0af4f0-94cb-45ee-a0fb-3a3a4830ecfc',_binary '\0',_binary '\0',NULL,'2021-08-01 20:04:53.115','2021-08-01 20:04:53.115',NULL,'Lop hoc ket hop Redux vao du an ReactJS'),('8de618e1-892d-479b-a21c-7516965b0f0a','ReactJS - Redux P2','ca0af4f0-94cb-45ee-a0fb-3a3a4830ecfc',_binary '\0',_binary '\0',NULL,'2021-08-01 20:04:56.332','2021-08-01 20:04:56.332',NULL,'Lop hoc ket hop Redux vao du an ReactJS'),('9ae8cfd1-5479-4ebb-b346-11f94464fdbe','Java Ep.1','6abff208-332b-4c30-9522-17022cd06c0d',_binary '\0',_binary '\0',NULL,'2021-08-01 20:03:52.316','2021-08-01 20:03:52.316',NULL,'Lop Hoc Java'),('a3c70505-1c6b-49da-be95-b80ca0b61fd6','React Hook Phan 2','f33f835a-93f5-4acf-bd32-81eb5729438e',_binary '\0',_binary '\0',NULL,'2021-08-01 20:05:41.010','2021-08-01 20:05:41.010',NULL,'Huong Dan Su Dung React Hook'),('abd4bdba-dfc6-4b5d-b012-21adcc83b74b','Java Ep.5','6abff208-332b-4c30-9522-17022cd06c0d',_binary '\0',_binary '\0',NULL,'2021-08-01 20:04:05.793','2021-08-01 20:04:05.793',NULL,'Lop Hoc Java'),('b5baa41b-d89c-4d37-b2c9-daecee9eef0f','React JS Bai 4','091c4fb1-b351-4507-85ff-26bbaa30ad84',_binary '\0',_binary '',NULL,'2021-08-01 19:01:04.885','2021-08-01 19:08:23.428',NULL,'Lop Hoc React JS'),('b620400d-6f4e-4ba9-a849-cab35c9dec63','Java Ep.6','6abff208-332b-4c30-9522-17022cd06c0d',_binary '\0',_binary '\0',NULL,'2021-08-01 20:04:08.914','2021-08-01 20:04:08.914',NULL,'Lop Hoc Java'),('bf245c6b-5e54-44b6-a2ce-3327b1c2d318','ReactJS - Redux','ca0af4f0-94cb-45ee-a0fb-3a3a4830ecfc',_binary '\0',_binary '\0',NULL,'2021-08-01 20:04:45.344','2021-08-01 20:04:45.344',NULL,'Lop hoc ket hop Redux vao du an ReactJS'),('c6cbdfe6-76ea-458a-a8d5-88343773ae40','React Hook','f33f835a-93f5-4acf-bd32-81eb5729438e',_binary '\0',_binary '\0',NULL,'2021-08-01 20:05:32.968','2021-08-01 20:05:32.968',NULL,'Huong Dan Su Dung React Hook'),('dfdb19b3-63b9-4d03-8b73-a59372c93563','Java Ep.3','6abff208-332b-4c30-9522-17022cd06c0d',_binary '\0',_binary '\0',NULL,'2021-08-01 20:03:58.173','2021-08-01 20:03:58.173',NULL,'Lop Hoc Java'),('e282481c-d33f-4fc4-84fb-438e190d3a39','React JS Bai 4','091c4fb1-b351-4507-85ff-26bbaa30ad84',_binary '\0',_binary '\0',NULL,'2021-08-01 19:08:36.277','2021-08-01 19:09:49.054',NULL,'Lop Hoc React JS Fixed'),('e9998a56-fc79-424a-b802-a185d9c21683','Gioi Thieu Java','6abff208-332b-4c30-9522-17022cd06c0d',_binary '\0',_binary '\0',NULL,'2021-08-01 20:03:37.715','2021-08-01 20:03:37.715',NULL,'Lop Hoc Java');
/*!40000 ALTER TABLE `lesson` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-08-01 21:57:38
