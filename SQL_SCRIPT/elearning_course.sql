SELECT * FROM elearning.category where cat_id="dfb06e88-034e-4781-87c1-334c25c6dc72";
select * from category;


DROP TABLE IF EXISTS `course`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `course` (
  `id` varchar(100) NOT NULL ,
  `courseName` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `category_id`  varchar(100) NOT NULL,
  `teacher_id` int DEFAULT NULL,
  `rate` float DEFAULT NULL,
  `image` longblob,
  `price` float  NOT NULL,
  `sale` float DEFAULT NULL,
  `saleInfo` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `shortDescription` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci  NOT NULL,
  `fullDescription` varchar(10000) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `currentStudent` int DEFAULT NULL,
  `preview` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `view` int NOT NULL DEFAULT '0',
  `iSDeleted` bit(1) NOT NULL DEFAULT b'0',
  `logCreatedDate` datetime DEFAULT NULL,
  `logCreatedBy` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `logUpdatedDate` datetime DEFAULT NULL,
  `logUpdatedBy` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `isFinish` bit(1) NOT NULL DEFAULT b'0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;