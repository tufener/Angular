-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  jeu. 29 nov. 2018 à 08:45
-- Version du serveur :  5.7.19
-- Version de PHP :  5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `btsbase`
--
CREATE DATABASE IF NOT EXISTS `dbGestionEmp` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `dbGestionEmp`;

-- --------------------------------------------------------

--
-- Structure de la table `employes`
--

DROP TABLE IF EXISTS `employes`;
CREATE TABLE IF NOT EXISTS `employes` (
  `ID_EMP` int(11) NOT NULL AUTO_INCREMENT,
  `CODESERVICE` int(11) NOT NULL,
  `NOM` varchar(30) NOT NULL,
  `PRENOM` varchar(30) NOT NULL,
  `SALAIRE` decimal(6,2) NOT NULL,
  `VILLE` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`ID_EMP`),
  KEY `FK_APPARTIENT` (`CODESERVICE`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `employes`
--

INSERT INTO `employes` (`ID_EMP`, `CODESERVICE`, `NOM`, `PRENOM`, `SALAIRE`, `VILLE`) VALUES
(3, 3, 'Dupont', 'Paul', '1500.00', 'CRETEIL'),
(4, 1, 'Durand', 'Jennifer', '1800.00', 'PARIS'),
(5, 2, 'BERRIS', 'Jean', '2300.00', 'PARIS'),
(6, 1, 'ZAITER', 'Samy', '2300.00', 'SAINT MAUR'),
(7, 1, 'GERE', 'Lysiane', '2500.00', 'CRETEIL'),
(8, 3, 'ARQUILLERE', 'Laurent', '2600.00', 'COURBEVOIE');

-- --------------------------------------------------------

--
-- Structure de la table `services`
--

DROP TABLE IF EXISTS `services`;
CREATE TABLE IF NOT EXISTS `services` (
  `CODESERVICE` int(11) NOT NULL AUTO_INCREMENT,
  `LIBELLE` varchar(30) NOT NULL,
  PRIMARY KEY (`CODESERVICE`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `services`
--

INSERT INTO `services` (`CODESERVICE`, `LIBELLE`) VALUES
(1, 'Marketing'),
(2, 'Informatique'),
(3, 'Compta');

-- --------------------------------------------------------

--
-- Structure de la table `utilisateurs`
--

DROP TABLE IF EXISTS `utilisateurs`;
CREATE TABLE IF NOT EXISTS `utilisateurs` (
  `idUser` int(11) NOT NULL AUTO_INCREMENT,
  `login` varchar(20) NOT NULL,
  `mdp` varchar(20) NOT NULL,
  `profil` enum('A','U') NOT NULL DEFAULT 'U',
  PRIMARY KEY (`idUser`),
  UNIQUE KEY `xu_login` (`login`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `utilisateurs`
--

INSERT INTO `utilisateurs` (`idUser`, `login`, `mdp`, `profil`) VALUES
(1, 'u@u.fr', 'u', 'U'),
(2, 'a@a.fr', 'a', 'A');

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `employes`
--
ALTER TABLE `employes`
  ADD CONSTRAINT `FK_APPARTIENT` FOREIGN KEY (`CODESERVICE`) REFERENCES `services` (`CODESERVICE`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
