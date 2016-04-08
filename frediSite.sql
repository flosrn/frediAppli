-- phpMyAdmin SQL Dump
-- version 4.1.4
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Mer 23 Mars 2016 à 09:41
-- Version du serveur :  5.6.15-log
-- Version de PHP :  5.5.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données :  `fredi`
--
CREATE DATABASE IF NOT EXISTS `fredi` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `fredi`;

-- --------------------------------------------------------

--
-- Structure de la table `adherent`
--

DROP TABLE IF EXISTS `adherent`;
CREATE TABLE IF NOT EXISTS `adherent` (
  `numLicence` int(12) NOT NULL,
  `Nom` varchar(50) NOT NULL COMMENT 'Nom de adhérent',
  `Prenom` varchar(50) NOT NULL COMMENT 'Prénom adhérent',
  `dateNaissance` date DEFAULT NULL COMMENT 'Date de Naissance adhérent',
  `idClub` int(11) NOT NULL COMMENT 'identifiant du club auquel adhérent est inscrit',
  `idDemandeur` int(11) NOT NULL COMMENT 'identifiant du demandeur de note de frais',
  `id` int(3) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  KEY `FK_adherent_idClub_idx` (`idClub`) COMMENT 'Clé étrangère reliant un adhérent à son club',
  KEY `FK_adherent_idDemandeur_idx` (`idDemandeur`) COMMENT 'Clé étrangère reliant un adhérent à un demandeur de frais'
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- Contenu de la table `adherent`
--

INSERT INTO `adherent` (`numLicence`, `Nom`, `Prenom`, `dateNaissance`, `idClub`, `idDemandeur`, `id`) VALUES
(654654654, 'test', 'test', '2005-12-30', 1, 1, 1),
(2147483647, 'Bouetard', 'Kévin', '1995-05-16', 13, 1, 2),
(22, 'test', 'nirf', '0000-00-00', 1, 1, 3),
(859598999, 'bjbj', 'ugbugb', '0000-00-00', 1, 1, 4),
(89595, 'vug', 'gug', '0000-00-00', 1, 1, 5),
(111, 'flo', 'hih', '2016-03-26', 11, 2, 6),
(222, 'fjij', 'ihiuvfh', '2016-03-25', 2, 2, 7),
(456, 'nn', 'uijhn', '2016-03-17', 2, 3, 9),
(848, 'yhb', 'uhu', '2016-03-10', 14, 3, 10);

-- --------------------------------------------------------

--
-- Structure de la table `club`
--

DROP TABLE IF EXISTS `club`;
CREATE TABLE IF NOT EXISTS `club` (
  `idClub` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id unique du club',
  `Nom` varchar(45) NOT NULL COMMENT 'Nom du club',
  `Adresse` varchar(250) NOT NULL COMMENT 'Adresse du club',
  `CP` int(5) NOT NULL COMMENT 'Code Postal du Club',
  `Ville` varchar(250) NOT NULL COMMENT 'Ville dans laquelle se situe le Club',
  `Sigle` varchar(45) NOT NULL COMMENT 'Acronyme du Club',
  `NomPresident` varchar(45) NOT NULL COMMENT 'Nom du president du club',
  `ligueAffiliation` varchar(45) NOT NULL COMMENT 'Ligue a laquelle le club est affilié',
  PRIMARY KEY (`idClub`) COMMENT 'Clé primaire de la table'
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=15 ;

--
-- Contenu de la table `club`
--

INSERT INTO `club` (`idClub`, `Nom`, `Adresse`, `CP`, `Ville`, `Sigle`, `NomPresident`, `ligueAffiliation`) VALUES
(1, 'ChessTeam', '515, Avenue de Echeques', 31500, 'Toulouse', 'CT', 'ChessMan', '4'),
(2, 'fight club', '666, Hollywood', 31500, 'Toulouse', 'FC', 'Brad', '5'),
(11, 'BadPowa', '654654, La ou cest', 31200, 'Toulouse', 'BP', 'BadMan', '3'),
(12, 'HWarang', '654, Saint val', 46000, 'Cahors', 'HW', 'Raim', '1'),
(13, 'TFC', '0, Toulouse', 31000, 'Toulouse', 'TFC', 'TFCMan', '2'),
(14, 'L1', 'L1, Toulouse', 31000, 'Toulouse', 'L1', 'L1Man', '2');

-- --------------------------------------------------------

--
-- Structure de la table `demandeur`
--

DROP TABLE IF EXISTS `demandeur`;
CREATE TABLE IF NOT EXISTS `demandeur` (
  `idDemandeur` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identifiant unique du demandeur',
  `Nom` varchar(50) NOT NULL COMMENT 'Nom du demandeur',
  `Prenom` varchar(50) NOT NULL COMMENT 'Prenom du demandeur',
  `Rue` varchar(250) NOT NULL COMMENT 'Rue a laquelle habite le demandeur',
  `CP` int(5) NOT NULL COMMENT 'Code postal du demandeur',
  `Ville` varchar(250) NOT NULL COMMENT 'Ville dans laquelle le demandeur habite',
  `AdresseMail` varchar(250) NOT NULL,
  `motDePasse` varchar(250) NOT NULL COMMENT 'Mot de passe qui permet au demandeur de se connecter sur le site de gestion des notes de frais',
  PRIMARY KEY (`idDemandeur`) COMMENT 'Clé primaire de la table'
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Contenu de la table `demandeur`
--

INSERT INTO `demandeur` (`idDemandeur`, `Nom`, `Prenom`, `Rue`, `CP`, `Ville`, `AdresseMail`, `motDePasse`) VALUES
(1, 'd', 'd', 'd', 31000, 'd', 'd', 'd'),
(2, 'sylvian', 'caron', 'ugug', 565, 'toulouse', 'syl@syl.fr', '9bb762af029f10be3c65c4033f7d122d82aab270'),
(3, 'test', 'test', 'test', 123, 'test', 'test@test.fr', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3');

-- --------------------------------------------------------

--
-- Structure de la table `indemnite`
--

DROP TABLE IF EXISTS `indemnite`;
CREATE TABLE IF NOT EXISTS `indemnite` (
  `Annee` int(4) NOT NULL COMMENT 'Année correpondant au tarif kilométrique en vigueur',
  `tarifKilometrique` decimal(5,2) NOT NULL COMMENT 'Tarif Kilométrique en vigueur pour une année donnée',
  PRIMARY KEY (`Annee`) COMMENT 'Clé primaire de la table'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `indemnite`
--

INSERT INTO `indemnite` (`Annee`, `tarifKilometrique`) VALUES
(2015, '5.00'),
(2016, '6.00');

-- --------------------------------------------------------

--
-- Structure de la table `lignefrais`
--

DROP TABLE IF EXISTS `lignefrais`;
CREATE TABLE IF NOT EXISTS `lignefrais` (
  `idLigne` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identifiant unique de la ligne de frais',
  `date` date NOT NULL COMMENT 'Date à laquelle la ligne de frais a été ajoutée',
  `trajet` varchar(250) NOT NULL COMMENT 'Description du trajet parcourus, par exemple Toulouse - Montauban',
  `km` int(4) NOT NULL COMMENT 'Kilométrage parcourus lor du déplacement',
  `coutPeage` decimal(5,2) DEFAULT NULL COMMENT 'Coût éventuel dun péage lors dun déplacement',
  `coutTrajet` int(11) NOT NULL,
  `coutRepas` decimal(5,2) DEFAULT NULL COMMENT 'Coût éventuel dun repas',
  `coutHebergement` decimal(5,2) DEFAULT NULL COMMENT 'Coût éventuel dun hebergement',
  `coutTotal` int(11) NOT NULL,
  `idMotif` int(11) NOT NULL COMMENT 'Identifiant du motif de la note de frais',
  `idDemandeur` int(11) NOT NULL,
  `Annee` int(4) DEFAULT NULL COMMENT 'Année en cours lors de lémission de la note de frais',
  PRIMARY KEY (`idLigne`) COMMENT 'Clé primaire de la table',
  KEY `FK_ligneFrais_idMotif_idx` (`idMotif`) COMMENT 'Clé étrangère reliant la table ligne de frais aux motifs',
  KEY `FK_ligneFrais_Annee_idx` (`Annee`) COMMENT 'Clé étrangère reliant la table ligne de frais aux indemnitées'
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=106 ;

--
-- Contenu de la table `lignefrais`
--

INSERT INTO `lignefrais` (`idLigne`, `date`, `trajet`, `km`, `coutPeage`, `coutTrajet`, `coutRepas`, `coutHebergement`, `coutTotal`, `idMotif`, `idDemandeur`, `Annee`) VALUES
(23, '2016-03-16', 'huh', 100, '10.00', 600, '10.00', '10.00', 10, 25, 3, 2016),
(24, '2016-03-24', 'hg', 20, '100.00', 120, '100.00', '100.00', 420, 27, 3, 2016),
(74, '0000-00-00', 'test reload', 11, '11.00', 0, '11.00', '11.00', 33, 103, 2, 200),
(105, '2016-03-25', 'gfd', 11, '11.00', 66, '11.00', '11.00', 99, 123, 2, 2016);

-- --------------------------------------------------------

--
-- Structure de la table `ligue`
--

DROP TABLE IF EXISTS `ligue`;
CREATE TABLE IF NOT EXISTS `ligue` (
  `id_ligue` bigint(11) NOT NULL,
  `lib_ligue` varchar(45) NOT NULL,
  PRIMARY KEY (`id_ligue`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `ligue`
--

INSERT INTO `ligue` (`id_ligue`, `lib_ligue`) VALUES
(1, 'Ligue de TaeKwonDo'),
(2, 'Ligue de Foot'),
(3, 'Ligue de Badbington'),
(4, 'Ligue d''Echec'),
(5, 'Ligue de Boxe');

-- --------------------------------------------------------

--
-- Structure de la table `motif`
--

DROP TABLE IF EXISTS `motif`;
CREATE TABLE IF NOT EXISTS `motif` (
  `idMotif` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identifiant Unique du motif',
  `libelle` varchar(250) NOT NULL COMMENT 'Libellé donnant une description du motif',
  PRIMARY KEY (`idMotif`) COMMENT 'Clé primaire de la table'
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=138 ;

--
-- Contenu de la table `motif`
--

INSERT INTO `motif` (`idMotif`, `libelle`) VALUES
(1, 'test'),
(2, 'fjehz'),
(3, 'grhb'),
(4, 'frsf'),
(5, 'rfg'),
(6, 'gfrfse'),
(7, 'huh'),
(8, 'test'),
(9, 'test'),
(10, 'testmotif'),
(11, 'bb'),
(14, 'a'),
(15, 'aze'),
(16, 'vufbuf'),
(17, 'fgds'),
(18, 'ugu'),
(19, 'gfds'),
(20, 'gfds'),
(21, 'gre'),
(22, 'ae'),
(23, 'ae'),
(24, 'aze'),
(25, 'hu'),
(26, 'hu'),
(27, 'yuy'),
(28, 'undefined'),
(29, 'fsf'),
(30, 'fsf'),
(31, 'fdsf<'),
(32, ''),
(33, 'testM'),
(34, 'testM'),
(35, 'testM'),
(36, 'testM'),
(37, 'testM'),
(38, 'testM'),
(39, 'testM'),
(40, 'testM'),
(41, ''),
(42, 'aze'),
(43, 'zxyw'),
(44, 'zxyw'),
(45, 'test28'),
(46, 'zxyw'),
(47, 'zxyw'),
(48, 'zxyw'),
(49, 'zxyw'),
(50, 'zxyw'),
(51, 'zxyw'),
(52, 'zxyw'),
(53, 'zxyw'),
(54, 'ionic'),
(55, 'undefined'),
(56, 'test modif'),
(57, 'iomic'),
(58, 'iomic'),
(59, 'iomic'),
(60, 'testid'),
(61, 'zxyw'),
(62, 'zertyuxcvbncvb'),
(63, 'hziydfguyegqfyugeysghv'),
(64, 'gzdgtfgeugfu'),
(65, 'fef'),
(66, 'test date'),
(67, 'test date 2'),
(68, 'testdate 310'),
(69, 'aze'),
(70, 'aze'),
(71, 'dgf'),
(72, 'aze'),
(73, 'aze'),
(74, 'aze'),
(75, 'aze'),
(76, 'fd'),
(77, 'deshfies'),
(78, 'dsv'),
(79, 'gvg'),
(80, 'dcw'),
(81, 'guzeydfg'),
(82, 'dsf'),
(83, 'fds'),
(84, 'dfg'),
(85, 'fesf'),
(86, 'hu'),
(87, 'dsf'),
(88, 'gguyg'),
(89, 'fds'),
(90, 'fgdf'),
(91, 'hbub'),
(92, 'gygyg'),
(93, 'yguy'),
(94, 'ug'),
(95, 'huh'),
(96, 'gyi'),
(97, 'ug'),
(98, 'guyg'),
(99, 'gug'),
(100, 'gyg'),
(101, 'ug'),
(102, 'gfg'),
(103, 'testreload'),
(104, 'fsdf'),
(105, 'hcydesvcd'),
(106, 'aze'),
(107, 'aze'),
(108, 'aze'),
(109, 'aze'),
(110, 'aze'),
(111, 'gg'),
(112, 'cs'),
(113, 'fes'),
(114, 'aze'),
(115, 'aze'),
(116, 'aze'),
(117, 'aze'),
(118, 'dd'),
(119, 'ikh'),
(120, 'aze'),
(121, 'hgu'),
(122, 'd'),
(123, 'df'),
(124, 'f'),
(125, 'df'),
(126, 's'),
(127, 's'),
(128, 's'),
(129, 's'),
(130, 's'),
(131, 'h'),
(132, 'd'),
(133, 'aze'),
(134, 'aze'),
(135, 'aze'),
(136, 'test date ultim'),
(137, 'df');

--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `adherent`
--
ALTER TABLE `adherent`
  ADD CONSTRAINT `FK_adherent_idDemandeur` FOREIGN KEY (`idDemandeur`) REFERENCES `demandeur` (`idDemandeur`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `lignefrais`
--
ALTER TABLE `lignefrais`
  ADD CONSTRAINT `gfdg` FOREIGN KEY (`idMotif`) REFERENCES `motif` (`idMotif`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
