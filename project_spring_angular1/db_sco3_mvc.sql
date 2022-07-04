-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: May 03, 2022 at 07:16 PM
-- Server version: 5.7.36
-- PHP Version: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_sco3_mvc`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
CREATE TABLE IF NOT EXISTS `admin` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `pswd` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `email`, `pswd`) VALUES
(1, 'e1', 'e1');

-- --------------------------------------------------------

--
-- Table structure for table `consultation`
--

DROP TABLE IF EXISTS `consultation`;
CREATE TABLE IF NOT EXISTS `consultation` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `date_consultation` datetime DEFAULT NULL,
  `rapport` varchar(255) DEFAULT NULL,
  `rendez_vous_id` bigint(20) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKjglbsx1peh4uiw2l9b3cr853w` (`rendez_vous_id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `consultation`
--

INSERT INTO `consultation` (`id`, `date_consultation`, `rapport`, `rendez_vous_id`, `description`) VALUES
(1, '2022-05-29 00:00:00', NULL, NULL, NULL),
(3, '2022-05-03 00:00:00', NULL, NULL, NULL),
(4, '2022-05-02 00:00:00', NULL, NULL, 'test'),
(5, '2022-05-29 00:00:00', NULL, 7, 'test222'),
(6, '2022-05-31 00:00:00', NULL, 7, 'dfsf');

-- --------------------------------------------------------

--
-- Table structure for table `medecin`
--

DROP TABLE IF EXISTS `medecin`;
CREATE TABLE IF NOT EXISTS `medecin` (
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

--
-- Dumping data for table `medecin`
--

INSERT INTO `medecin` (`id`, `email`, `nom`, `specialite`, `date_naissance`, `num_tel`, `pre_nom`, `pswd`, `type_sexe`) VALUES
(5, 'nabile@gmail.com', 'nabile', 'specialite1', '2022-10-10', '0666666666', 'test5', NULL, 'M'),
(6, 'fahde@gmail.com', 'fahde', 'specialite2', '2022-10-10', '0666666666', 'test6', NULL, 'M'),
(25, 'tt', 'ttt', 'specialite1', '2022-05-06', 'ttt', 'ttt', 'ttt', 'Feminin'),
(23, 'ddd', 'ddd', 'specialite3', '2022-05-03', 'ddd', 'ddd', NULL, 'dd'),
(24, 'rrr', 'rrr', 'specialite1', '2022-05-03', 'rrr', 'rrr', 'rrr', 'Masculin'),
(22, 'ccc', 'ccc', 'specialite3', '2022-05-05', 'ccc', 'ccc', NULL, 'ccc'),
(19, 'aaa', 'zzz', 'specialite1', '2022-05-18', 'zzz', 'zzzz', 'aaa', 'Masculin'),
(20, 'zzzab', 'zzzab', 'specialite1', '2022-05-20', 'zzzab', 'zzzzab', NULL, 'Masculin');

-- --------------------------------------------------------

--
-- Table structure for table `patient`
--

DROP TABLE IF EXISTS `patient`;
CREATE TABLE IF NOT EXISTS `patient` (
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

--
-- Dumping data for table `patient`
--

INSERT INTO `patient` (`id`, `date_naissance`, `nom`, `email`, `num_tel`, `pre_nom`, `pswd`, `type_sexe`) VALUES
(7, '2022-05-02', 'aaa', 'aaa', 'aaa', 'aaa', 'aaa', 'aaa');

-- --------------------------------------------------------

--
-- Table structure for table `rendez_vous`
--

DROP TABLE IF EXISTS `rendez_vous`;
CREATE TABLE IF NOT EXISTS `rendez_vous` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `date` datetime DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `date_planification` date DEFAULT NULL,
  `doctor_id` bigint(20) DEFAULT NULL,
  `patient_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `rendez_vous`
--

INSERT INTO `rendez_vous` (`id`, `date`, `status`, `date_planification`, `doctor_id`, `patient_id`) VALUES
(7, '2022-06-04 00:00:00', NULL, '2022-06-05', 19, 7);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
