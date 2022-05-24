-- MariaDB dump 10.19  Distrib 10.4.24-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: db_sco3_mvc
-- ------------------------------------------------------
-- Server version	10.4.24-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `admin` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `pswd` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (1,'admin@gmail.com','admin');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `consultation`
--

DROP TABLE IF EXISTS `consultation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `consultation` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `date_consultation` datetime DEFAULT NULL,
  `rapport` varchar(255) DEFAULT NULL,
  `rendez_vous_id` bigint(20) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKjglbsx1peh4uiw2l9b3cr853w` (`rendez_vous_id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `consultation`
--

LOCK TABLES `consultation` WRITE;
/*!40000 ALTER TABLE `consultation` DISABLE KEYS */;
INSERT INTO `consultation` VALUES (1,'2022-05-29 00:00:00',NULL,NULL,NULL),(3,'2022-05-03 00:00:00',NULL,NULL,NULL),(4,'2022-05-02 00:00:00',NULL,NULL,'test'),(5,'2022-05-29 00:00:00',NULL,7,'test222'),(6,'2022-05-31 00:00:00',NULL,7,'dfsf');
/*!40000 ALTER TABLE `consultation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `medecin`
--

DROP TABLE IF EXISTS `medecin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `medecin` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `specialite` varchar(255) DEFAULT NULL,
  `date_naissance` date DEFAULT NULL,
  `num_tel` varchar(255) DEFAULT NULL,
  `pre_nom` varchar(255) DEFAULT NULL,
  `pswd` varchar(255) DEFAULT NULL,
  `type_sexe` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=26 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medecin`
--

LOCK TABLES `medecin` WRITE;
/*!40000 ALTER TABLE `medecin` DISABLE KEYS */;
INSERT INTO `medecin` VALUES (5,'nabile.maseouiari@gmail.com','nabile','specialite1','1966-09-29','0666666666','masewouari',NULL,'Masculin'),(6,'fahde.yassine@gmail.com','fahde','specialite2','1996-10-08','0666666666','yassine',NULL,'Masculin'),(25,'hamid.mhamda@gmail.com','Hamid','specialite1','2022-05-06','0634234576','Mhamda',NULL,'Masculin'),(23,'ddd','ddd','specialite3','2022-05-03','ddd','ddd',NULL,'dd'),(24,'rrr','rrr','specialite1','2022-05-03','rrr','rrr','rrr','Masculin'),(22,'ccc','ccc','specialite3','2022-05-05','ccc','ccc',NULL,'ccc'),(19,'aaa','zzz','specialite1','2022-05-18','zzz','zzzz','aaa','Masculin'),(20,'zzzab','zzzab','specialite1','2022-05-20','zzzab','zzzzab',NULL,'Masculin');
/*!40000 ALTER TABLE `medecin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patient`
--

DROP TABLE IF EXISTS `patient`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `patient` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `date_naissance` date DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `num_tel` varchar(255) DEFAULT NULL,
  `pre_nom` varchar(255) DEFAULT NULL,
  `pswd` varchar(255) DEFAULT NULL,
  `type_sexe` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient`
--

LOCK TABLES `patient` WRITE;
/*!40000 ALTER TABLE `patient` DISABLE KEYS */;
INSERT INTO `patient` VALUES (7,'2022-05-02','hasnaoui','said@gmail.com','0654652387','said','0000','Homme');
/*!40000 ALTER TABLE `patient` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rendez_vous`
--

DROP TABLE IF EXISTS `rendez_vous`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rendez_vous` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `date` datetime DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `date_planification` date DEFAULT NULL,
  `doctor_id` bigint(20) DEFAULT NULL,
  `patient_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rendez_vous`
--

LOCK TABLES `rendez_vous` WRITE;
/*!40000 ALTER TABLE `rendez_vous` DISABLE KEYS */;
INSERT INTO `rendez_vous` VALUES (7,'2022-06-04 00:00:00',NULL,'2022-06-05',19,7);
/*!40000 ALTER TABLE `rendez_vous` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-24 12:03:26
