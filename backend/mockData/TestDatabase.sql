-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Czas generowania: 30 Gru 2019, 21:23
-- Wersja serwera: 10.1.40-MariaDB-cll-lve
-- Wersja PHP: 5.6.38

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `bartex25_myawsomeflkat`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `Advertisement`
--

CREATE TABLE `Advertisement` (
  `id` int(11) NOT NULL,
  `id_property_type` int(11) NOT NULL,
  `area` decimal(8,2) NOT NULL,
  `added_time` datetime NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_localization` int(11) NOT NULL,
  `id_price` int(11) NOT NULL,
  `title` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Zrzut danych tabeli `Advertisement`
--

INSERT INTO `Advertisement` (`id`, `id_property_type`, `area`, `added_time`, `id_user`, `id_localization`, `id_price`, `title`) VALUES
(1, 1, 22.00, '2019-01-17 20:30:05', 1, 1, 1, ''),
(2, 4, 212.00, '2018-12-27 23:40:17', 2, 2, 2, ''),
(3, 2, 183.00, '2019-04-11 08:44:53', 3, 3, 3, ''),
(4, 3, 122.00, '2019-11-25 13:41:29', 4, 4, 4, ''),
(5, 3, 246.00, '2019-12-01 12:30:05', 5, 5, 5, '');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `Advertisement_Facilities`
--

CREATE TABLE `Advertisement_Facilities` (
  `id` int(11) NOT NULL,
  `id_advertisement` int(11) NOT NULL,
  `id_facilities` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Zrzut danych tabeli `Advertisement_Facilities`
--

INSERT INTO `Advertisement_Facilities` (`id`, `id_advertisement`, `id_facilities`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 1, 3),
(4, 1, 5),
(5, 3, 2),
(6, 2, 3),
(7, 2, 1),
(8, 4, 1),
(9, 4, 2),
(10, 5, 3),
(11, 5, 2),
(12, 5, 1);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `Advertisement_Image`
--

CREATE TABLE `Advertisement_Image` (
  `id` int(11) NOT NULL,
  `id_advertisement` int(11) NOT NULL,
  `id_image` int(11) NOT NULL,
  `is_ thumbnail` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `City`
--

CREATE TABLE `City` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Zrzut danych tabeli `City`
--

INSERT INTO `City` (`id`, `name`) VALUES
(147, 'Atyrau'),
(154, 'Kraków'),
(148, 'Ndjolé'),
(151, 'Nurmo'),
(152, 'Oxbow'),
(144, 'Port Said'),
(149, 'Toulouse'),
(146, 'Umbanyar'),
(150, 'Volksrust'),
(153, 'Waerana'),
(145, 'Yijing');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `Contact_information`
--

CREATE TABLE `Contact_information` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone_number` varchar(9) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Zrzut danych tabeli `Contact_information`
--

INSERT INTO `Contact_information` (`id`, `id_user`, `email`, `phone_number`) VALUES
(4, 1, 'bartek.wieckowski@gmail.com', '290905200'),
(5, 2, 'cacutt1@home.pl', '260637971'),
(6, 3, 'test@test.pl', '171447383'),
(7, 4, 'streagust3@flickr.com', '972134644'),
(8, 5, 'kkiellor4@nih.gov', '484665464'),
(9, 6, 'pficken5@ucsd.edu', '218950996'),
(10, 7, 'ssmetoun6@aol.com', '982354909'),
(11, 8, 'oclapp7@si.edu', '602665732'),
(12, 9, 'ywindham8@businesswire.com', '200598622'),
(13, 10, 'ccolumbine9@globo.com', '937524860');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `District`
--

CREATE TABLE `District` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `id_city` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Zrzut danych tabeli `District`
--

INSERT INTO `District` (`id`, `name`, `id_city`) VALUES
(19, 'Stare Miasto', 154),
(20, 'Grzegórzki', 154),
(21, 'Prądnik Czerwony', 154),
(22, 'Prądnik Biały', 154),
(23, 'Krowodrza', 154),
(24, 'Bronowice', 154),
(25, 'Zwierzyniec', 154),
(26, 'Dębniki', 154),
(27, 'Łagiewniki-Borek Fałęcki', 154),
(28, 'Swoszowice', 154),
(29, 'Podgórze Duchackie', 154),
(30, 'Bieżanów-Prokocim', 154),
(31, 'Podgórze', 154),
(32, 'Czyżyny', 154),
(33, 'Mistrzejowice', 154),
(34, 'Bieńczyce', 154),
(35, 'Wzgórza Krzesławickie', 154),
(36, 'Nowa Huta', 154);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `Facilities`
--

CREATE TABLE `Facilities` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Zrzut danych tabeli `Facilities`
--

INSERT INTO `Facilities` (`id`, `name`) VALUES
(1, 'wifi'),
(2, 'telewizor'),
(3, 'prywatna łazienka'),
(4, 'balkon'),
(5, 'parking');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `Image`
--

CREATE TABLE `Image` (
  `id` int(11) NOT NULL,
  `path` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `Localization`
--

CREATE TABLE `Localization` (
  `id` int(11) NOT NULL,
  `longitude` decimal(9,6) NOT NULL,
  `latitude` decimal(9,6) NOT NULL,
  `street` varchar(100) NOT NULL,
  `flat_number` varchar(5) NOT NULL,
  `street_number` varchar(5) NOT NULL,
  `id_district` int(11) NOT NULL,
  `postal_code` varchar(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Zrzut danych tabeli `Localization`
--

INSERT INTO `Localization` (`id`, `longitude`, `latitude`, `street`, `flat_number`, `street_number`, `id_district`, `postal_code`) VALUES
(1, 19.965100, 50.093131, 'Powstańców', '45', '26', 21, '31-422'),
(2, 19.918437, 50.014727, 'Żywiecka', '26', '40', 27, '30-427'),
(3, 19.970681, 50.058295, 'Grzegórzecka', '85', '61', 20, '31-559'),
(4, 19.943268, 50.050411, 'Józefa', '12', '4', 19, '31-056'),
(5, 19.884103, 50.078137, 'Na Błonie', '19', '13b', 24, '30-147');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `Password`
--

CREATE TABLE `Password` (
  `id` int(11) NOT NULL,
  `password` text NOT NULL,
  `id_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Zrzut danych tabeli `Password`
--

INSERT INTO `Password` (`id`, `password`, `id_user`) VALUES
(1, 'f865b53623b121fd34ee5426c792e5c33af8c227', 1),
(2, 'f865b53623b121fd34ee5426c792e5c33af8c227', 2),
(3, 'f865b53623b121fd34ee5426c792e5c33af8c227', 3),
(4, 'f865b53623b121fd34ee5426c792e5c33af8c227', 4),
(5, 'f865b53623b121fd34ee5426c792e5c33af8c227', 5),
(6, 'f865b53623b121fd34ee5426c792e5c33af8c227', 6),
(7, 'f865b53623b121fd34ee5426c792e5c33af8c227', 7),
(8, 'f865b53623b121fd34ee5426c792e5c33af8c227', 8),
(9, 'f865b53623b121fd34ee5426c792e5c33af8c227', 9),
(10, 'f865b53623b121fd34ee5426c792e5c33af8c227', 10);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `Price`
--

CREATE TABLE `Price` (
  `id` int(11) NOT NULL,
  `price` decimal(8,2) NOT NULL,
  `are_media_included` tinyint(1) NOT NULL DEFAULT '1',
  `commission` decimal(8,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Zrzut danych tabeli `Price`
--

INSERT INTO `Price` (`id`, `price`, `are_media_included`, `commission`) VALUES
(1, 647.37, 0, 486.67),
(2, 1711.24, 0, 955.38),
(3, 1257.63, 1, 594.42),
(4, 349.58, 0, 625.74),
(5, 911.35, 0, 594.37);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `Property_type`
--

CREATE TABLE `Property_type` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Zrzut danych tabeli `Property_type`
--

INSERT INTO `Property_type` (`id`, `name`) VALUES
(1, 'Apartament'),
(4, 'Garaż'),
(3, 'Mieszkanie'),
(2, 'Pokój');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `User`
--

CREATE TABLE `User` (
  `id` int(11) NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Zrzut danych tabeli `User`
--

INSERT INTO `User` (`id`, `first_name`, `last_name`) VALUES
(1, 'Bartek', 'Więckowski'),
(2, 'Jan', 'Kowalski'),
(3, 'Noelyn', 'Lowdeane'),
(4, 'Ansell', 'Ceillier'),
(5, 'Alic', 'Hannigan'),
(6, 'Claudianus', 'Coombs'),
(7, 'Kinnie', 'Tettley'),
(8, 'Karoly', 'Plenderleith'),
(9, 'Pearl', 'Jenman'),
(10, 'Hashim', 'Hickisson');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `Advertisement`
--
ALTER TABLE `Advertisement`
  ADD PRIMARY KEY (`id`),
  ADD KEY ` Advertisement_Price_id_fk` (`id_price`),
  ADD KEY ` Advertisement_Property_type_id_fk` (`id_property_type`),
  ADD KEY ` Advertisement_User_id_fk` (`id_user`),
  ADD KEY ` Advertisement_localization_id_fk` (`id_localization`);

--
-- Indeksy dla tabeli `Advertisement_Facilities`
--
ALTER TABLE `Advertisement_Facilities`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Advertisement_Facilities_id_uindex` (`id`),
  ADD KEY `Advertisement_Facilities_ Advertisement_id_fk` (`id_advertisement`),
  ADD KEY `Advertisement_Facilities_Facilities_id_fk` (`id_facilities`);

--
-- Indeksy dla tabeli `Advertisement_Image`
--
ALTER TABLE `Advertisement_Image`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Advertisement_Image_id_uindex` (`id`),
  ADD KEY `Advertisement_Image_Advertisement_id_fk` (`id_advertisement`),
  ADD KEY `Advertisement_Image_Image_id_fk` (`id_image`);

--
-- Indeksy dla tabeli `City`
--
ALTER TABLE `City`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `City_id_uindex` (`id`),
  ADD UNIQUE KEY `City_nazwa_uindex` (`name`);

--
-- Indeksy dla tabeli `Contact_information`
--
ALTER TABLE `Contact_information`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Contact_information_User_id_fk` (`id_user`),
  ADD UNIQUE KEY `Contact_information_email_uindex` (`email`),
  ADD UNIQUE KEY `Contact_information_phoneNumber_uindex` (`phone_number`);

--
-- Indeksy dla tabeli `District`
--
ALTER TABLE `District`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `District_name_uindex` (`name`),
  ADD UNIQUE KEY `District_id_uindex` (`id`),
  ADD KEY `District_City_id_fk` (`id_city`);

--
-- Indeksy dla tabeli `Facilities`
--
ALTER TABLE `Facilities`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `Image`
--
ALTER TABLE `Image`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Image_id_uindex` (`id`);

--
-- Indeksy dla tabeli `Localization`
--
ALTER TABLE `Localization`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `localization_id_uindex` (`id`),
  ADD KEY `localization_District_id_fk` (`id_district`);

--
-- Indeksy dla tabeli `Password`
--
ALTER TABLE `Password`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Passwords_User_id_fk` (`id_user`),
  ADD UNIQUE KEY `Passwords_id_uindex` (`id`);

--
-- Indeksy dla tabeli `Price`
--
ALTER TABLE `Price`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Price_id_uindex` (`id`);

--
-- Indeksy dla tabeli `Property_type`
--
ALTER TABLE `Property_type`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Property_type_id_uindex` (`id`),
  ADD UNIQUE KEY `Property_type_name_uindex` (`name`);

--
-- Indeksy dla tabeli `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `User_id_uindex` (`id`);

--
-- AUTO_INCREMENT dla tabel zrzutów
--

--
-- AUTO_INCREMENT dla tabeli `Advertisement`
--
ALTER TABLE `Advertisement`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT dla tabeli `Advertisement_Facilities`
--
ALTER TABLE `Advertisement_Facilities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT dla tabeli `Advertisement_Image`
--
ALTER TABLE `Advertisement_Image`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT dla tabeli `City`
--
ALTER TABLE `City`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=155;

--
-- AUTO_INCREMENT dla tabeli `Contact_information`
--
ALTER TABLE `Contact_information`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT dla tabeli `District`
--
ALTER TABLE `District`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT dla tabeli `Facilities`
--
ALTER TABLE `Facilities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT dla tabeli `Image`
--
ALTER TABLE `Image`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT dla tabeli `Localization`
--
ALTER TABLE `Localization`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT dla tabeli `Password`
--
ALTER TABLE `Password`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT dla tabeli `Price`
--
ALTER TABLE `Price`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT dla tabeli `Property_type`
--
ALTER TABLE `Property_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT dla tabeli `User`
--
ALTER TABLE `User`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Ograniczenia dla zrzutów tabel
--

--
-- Ograniczenia dla tabeli `Advertisement`
--
ALTER TABLE `Advertisement`
  ADD CONSTRAINT ` Advertisement_Price_id_fk` FOREIGN KEY (`id_price`) REFERENCES `Price` (`id`),
  ADD CONSTRAINT ` Advertisement_Property_type_id_fk` FOREIGN KEY (`id_property_type`) REFERENCES `Property_type` (`id`),
  ADD CONSTRAINT ` Advertisement_User_id_fk` FOREIGN KEY (`id_user`) REFERENCES `User` (`id`),
  ADD CONSTRAINT ` Advertisement_localization_id_fk` FOREIGN KEY (`id_localization`) REFERENCES `Localization` (`id`);

--
-- Ograniczenia dla tabeli `Advertisement_Facilities`
--
ALTER TABLE `Advertisement_Facilities`
  ADD CONSTRAINT `Advertisement_Facilities_ Advertisement_id_fk` FOREIGN KEY (`id_advertisement`) REFERENCES `Advertisement` (`id`),
  ADD CONSTRAINT `Advertisement_Facilities_Facilities_id_fk` FOREIGN KEY (`id_facilities`) REFERENCES `Facilities` (`id`);

--
-- Ograniczenia dla tabeli `Advertisement_Image`
--
ALTER TABLE `Advertisement_Image`
  ADD CONSTRAINT `Advertisement_Image_Advertisement_id_fk` FOREIGN KEY (`id_advertisement`) REFERENCES `Advertisement` (`id`),
  ADD CONSTRAINT `Advertisement_Image_Image_id_fk` FOREIGN KEY (`id_image`) REFERENCES `Image` (`id`);

--
-- Ograniczenia dla tabeli `Contact_information`
--
ALTER TABLE `Contact_information`
  ADD CONSTRAINT `Contact_information_User_id_fk` FOREIGN KEY (`id_user`) REFERENCES `User` (`id`);

--
-- Ograniczenia dla tabeli `District`
--
ALTER TABLE `District`
  ADD CONSTRAINT `District_City_id_fk` FOREIGN KEY (`id_city`) REFERENCES `City` (`id`);

--
-- Ograniczenia dla tabeli `Localization`
--
ALTER TABLE `Localization`
  ADD CONSTRAINT `localization_District_id_fk` FOREIGN KEY (`id_district`) REFERENCES `District` (`id`);

--
-- Ograniczenia dla tabeli `Password`
--
ALTER TABLE `Password`
  ADD CONSTRAINT `Passwords_User_id_fk` FOREIGN KEY (`id_user`) REFERENCES `User` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
