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

-- Dump completed on 2021-08-01 22:00:21
