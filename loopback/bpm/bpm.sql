-- MySQL dump 10.13  Distrib 5.5.53, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: bpm
-- ------------------------------------------------------
-- Server version	5.5.53-0ubuntu0.14.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `content`
--

DROP TABLE IF EXISTS `content`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `content` (
  `uuid` varchar(255) NOT NULL,
  `name` varchar(128) NOT NULL,
  `id_item` int(11) NOT NULL,
  `Buscable` varchar(4) NOT NULL,
  `Titulo_Internacional` varchar(255) NOT NULL,
  `Titulo_Original` varchar(255) NOT NULL,
  `Temporada` varchar(4) NOT NULL,
  `Episodio` varchar(4) NOT NULL,
  `Duracion` varchar(4) NOT NULL,
  `Desde` varchar(20) NOT NULL,
  `Hasta` varchar(20) NOT NULL,
  `Pais` varchar(255) NOT NULL,
  `Subtitulos` varchar(12) NOT NULL,
  `Doblada` varchar(4) NOT NULL,
  `Calidad` varchar(4) NOT NULL,
  `Relevancia` varchar(4) NOT NULL,
  `Ranking` varchar(6) NOT NULL,
  `WIDEVINE` varchar(255) NOT NULL,
  `credits_begin_end` varchar(8) NOT NULL,
  `credits_end_begin` varchar(8) NOT NULL,
  `imdb_id` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `content`
--

LOCK TABLES `content` WRITE;
/*!40000 ALTER TABLE `content` DISABLE KEYS */;
INSERT INTO `content` (`uuid`, `name`, `id_item`, `Buscable`, `Titulo_Internacional`, `Titulo_Original`, `Temporada`, `Episodio`, `Duracion`, `Desde`, `Hasta`, `Pais`, `Subtitulos`, `Doblada`, `Calidad`, `Relevancia`, `Ranking`, `WIDEVINE`, `credits_begin_end`, `credits_end_begin`, `imdb_id`) VALUES ('uuid_1','name_1',1,'true','tituloInternacional_1','tituloOriginal_1','1','1','1','2016-11-09','2016-11-09','AR','ES','true','HD','1','1','widevine_1','1','1','1');
INSERT INTO `content` (`uuid`, `name`, `id_item`, `Buscable`, `Titulo_Internacional`, `Titulo_Original`, `Temporada`, `Episodio`, `Duracion`, `Desde`, `Hasta`, `Pais`, `Subtitulos`, `Doblada`, `Calidad`, `Relevancia`, `Ranking`, `WIDEVINE`, `credits_begin_end`, `credits_end_begin`, `imdb_id`) VALUES ('uuid_2','name_2',2,'true','tituloInternacional_2','tituloOriginal_2','2','2','2','2016-11-09','2016-11-09','AR','ES','true','HD','2','2','widevine_2','2','2','2');
INSERT INTO `content` (`uuid`, `name`, `id_item`, `Buscable`, `Titulo_Internacional`, `Titulo_Original`, `Temporada`, `Episodio`, `Duracion`, `Desde`, `Hasta`, `Pais`, `Subtitulos`, `Doblada`, `Calidad`, `Relevancia`, `Ranking`, `WIDEVINE`, `credits_begin_end`, `credits_end_begin`, `imdb_id`) VALUES ('uuid_3','name_3',3,'true','tituloInternacional_3','tituloOriginal_3','3','3','3','2016-11-09','2016-11-09','AR','ES','true','HD','3','3','widevine_3','3','3','3');
INSERT INTO `content` (`uuid`, `name`, `id_item`, `Buscable`, `Titulo_Internacional`, `Titulo_Original`, `Temporada`, `Episodio`, `Duracion`, `Desde`, `Hasta`, `Pais`, `Subtitulos`, `Doblada`, `Calidad`, `Relevancia`, `Ranking`, `WIDEVINE`, `credits_begin_end`, `credits_end_begin`, `imdb_id`) VALUES ('uuid_4','name_4',4,'true','tituloInternacional_4','tituloOriginal_4','4','4','4','2016-11-09','2016-11-09','AR','ES','true','HD','4','4','widevine_4','4','4','4');
/*!40000 ALTER TABLE `content` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `content_taxonomy`
--

DROP TABLE IF EXISTS `content_taxonomy`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `content_taxonomy` (
  `content_id` int(11) NOT NULL,
  `taxonomy_id` int(11) NOT NULL,
  `order` int(11) NOT NULL,
  PRIMARY KEY (`content_id`,`taxonomy_id`,`order`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `content_taxonomy`
--

LOCK TABLES `content_taxonomy` WRITE;
/*!40000 ALTER TABLE `content_taxonomy` DISABLE KEYS */;
INSERT INTO `content_taxonomy` (`content_id`, `taxonomy_id`, `order`) VALUES (1,2,1);
INSERT INTO `content_taxonomy` (`content_id`, `taxonomy_id`, `order`) VALUES (1,3,2);
INSERT INTO `content_taxonomy` (`content_id`, `taxonomy_id`, `order`) VALUES (1,4,3);
INSERT INTO `content_taxonomy` (`content_id`, `taxonomy_id`, `order`) VALUES (2,1,1);
INSERT INTO `content_taxonomy` (`content_id`, `taxonomy_id`, `order`) VALUES (2,3,3);
INSERT INTO `content_taxonomy` (`content_id`, `taxonomy_id`, `order`) VALUES (2,4,4);
INSERT INTO `content_taxonomy` (`content_id`, `taxonomy_id`, `order`) VALUES (3,1,2);
INSERT INTO `content_taxonomy` (`content_id`, `taxonomy_id`, `order`) VALUES (3,2,3);
INSERT INTO `content_taxonomy` (`content_id`, `taxonomy_id`, `order`) VALUES (3,4,5);
INSERT INTO `content_taxonomy` (`content_id`, `taxonomy_id`, `order`) VALUES (4,1,3);
INSERT INTO `content_taxonomy` (`content_id`, `taxonomy_id`, `order`) VALUES (4,2,4);
INSERT INTO `content_taxonomy` (`content_id`, `taxonomy_id`, `order`) VALUES (4,3,5);
/*!40000 ALTER TABLE `content_taxonomy` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `taxonomy`
--

DROP TABLE IF EXISTS `taxonomy`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `taxonomy` (
  `id` int(11) NOT NULL,
  `name` varchar(128) NOT NULL,
  `min_childs` int(11) NOT NULL,
  `max_childs` int(11) NOT NULL,
  `enabled` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `taxonomy`
--

LOCK TABLES `taxonomy` WRITE;
/*!40000 ALTER TABLE `taxonomy` DISABLE KEYS */;
INSERT INTO `taxonomy` (`id`, `name`, `min_childs`, `max_childs`, `enabled`) VALUES (1,'name1',0,2,1);
INSERT INTO `taxonomy` (`id`, `name`, `min_childs`, `max_childs`, `enabled`) VALUES (2,'name2',0,3,1);
INSERT INTO `taxonomy` (`id`, `name`, `min_childs`, `max_childs`, `enabled`) VALUES (3,'name3',0,4,1);
INSERT INTO `taxonomy` (`id`, `name`, `min_childs`, `max_childs`, `enabled`) VALUES (4,'name4',0,5,1);
/*!40000 ALTER TABLE `taxonomy` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'bpm'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed
