CREATE DATABASE  IF NOT EXISTS `elearning` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `elearning`;
-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
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
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `category_id` int DEFAULT NULL,
  `IsDeleted` bit(1) NOT NULL DEFAULT b'0',
  `Log_CreatedDate` datetime DEFAULT NULL,
  `Log_CreatedBy` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `Log_UpdatedDate` datetime DEFAULT NULL,
  `Log_UpdatedBy` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (9,'IT & Dau CC',NULL,_binary '',NULL,NULL,'2021-05-29 17:07:55',NULL),(10,'IT & Dau CC',NULL,_binary '\0','2021-05-29 16:04:39',NULL,'2021-05-29 17:11:20',NULL),(11,'IT & Software',NULL,_binary '\0','2021-05-29 16:05:33',NULL,NULL,NULL),(12,'IT & Software',NULL,_binary '\0','2021-05-29 16:06:14',NULL,NULL,NULL),(13,'IT & Software',NULL,_binary '\0','2021-05-29 16:07:16',NULL,NULL,NULL),(14,'Bussiness',NULL,_binary '\0','2021-05-29 16:08:10',NULL,NULL,NULL),(15,'Bussiness',NULL,_binary '\0','2021-05-29 16:08:18',NULL,NULL,NULL),(16,'Bussiness',NULL,_binary '\0','2021-05-29 16:10:36',NULL,NULL,NULL),(17,'Bussiness',NULL,_binary '\0','2021-05-29 16:11:46',NULL,NULL,NULL),(18,'Bussiness',NULL,_binary '\0','2021-05-29 16:12:48',NULL,NULL,NULL),(19,'Hung',NULL,_binary '','2021-05-29 16:13:25',NULL,'2021-05-29 16:23:41',NULL),(20,'Hung',NULL,_binary '','2021-05-29 16:13:27',NULL,'2021-05-29 16:24:48',NULL),(21,'Hung',NULL,_binary '','2021-05-29 16:14:13',NULL,'2021-05-29 16:24:49',NULL),(22,'Hung',NULL,_binary '','2021-05-29 16:14:14',NULL,'2021-05-29 16:24:50',NULL),(23,'Hung',NULL,_binary '','2021-05-29 16:14:16',NULL,'2021-05-29 16:24:51',NULL),(24,'Hung',NULL,_binary '','2021-05-29 16:14:18',NULL,'2021-05-29 16:24:53',NULL);
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-02 20:57:10
