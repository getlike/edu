-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 14, 2019 at 01:28 AM
-- Server version: 10.3.15-MariaDB
-- PHP Version: 7.1.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `comand a`
--

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--

CREATE TABLE `tasks` (
  `task_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `task_name` varchar(100) NOT NULL,
  `task_description` text NOT NULL,
  `task_importance` int(1) NOT NULL,
  `task_duration` int(1) NOT NULL,
  `task_difficulty` int(1) NOT NULL,
  `task_lifetime` datetime NOT NULL,
  `task_alarm` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tasks`
--

INSERT INTO `tasks` (`task_id`, `user_id`, `task_name`, `task_description`, `task_importance`, `task_duration`, `task_difficulty`, `task_lifetime`, `task_alarm`) VALUES
(1, 38, 'Сходити до лікаря', 'Записатися до лікаря онлайн в Амбулаторне відділення №4 МЦ ТОВ «Медикал Сервіс» в Житомирі  ', 1, 2, 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 38, 'Learn english', 'Learn English online using our high-quality resources to quickly improve your English. Our website for adult learners, is brought to you by the British Council, the world\'s English teaching experts.', 1, 2, 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 38, 'Понять пхп', 'http://codeharmony.ru/materials/111', 1, 2, 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 38, 'Навчитись Водити', 'http://natalka.pp.ua/vchimosya-voditi-mashinu', 1, 2, 3, '2019-06-14 00:00:00', '2019-06-14 05:59:00'),
(5, 38, 'Погодувати поросят)', 'Особенности кормления подсосных поросят После рождения молоко свиноматки единственный необходимый корм для поросят. На 1 кг прироста поросят за первую декаду жизни тратится 100% питательных веществ материнского молока, за вторую - 82,5%, за третью - 54,9%, за четвертую - 37,3%, пятую - 24,9% и за шестую - лишь 14,8%, а остальные - за счет подкормки. Это свидетельствует о том, что подкормка поросят имеет исключительно важное значение для получения крепких, хорошо развитых поросят. Источник: https://www.ankores.com.ua/publications/kak-kormit-podsosnykh-porosyat-pravilnoe-i-effektivnoe-kormlenie-porosyat-sosunov/', 1, 2, 3, '2019-06-14 00:00:00', '2019-06-20 04:04:00'),
(7, 38, 'ЗДАТИ ПРОЕКТ  1', '', 5, 3, 5, '2019-06-14 04:54:00', '2019-06-14 12:12:00'),
(8, 38, 'ЗДАТИ ПРОЕКТ 2', '', 5, 3, 5, '2019-06-14 04:54:00', '2019-06-14 12:12:00'),
(9, 38, 'ЗДАТИ ПРОЕКТ 3', '33333333333333333333333333333333333333', 3, 3, 2, '2019-06-21 05:56:00', '2019-06-21 05:45:00'),
(10, 38, 'ЗДАТИ ПРОЕКТ 4', '444444444444444444444444444444', 3, 3, 2, '2019-06-21 05:56:00', '2019-06-21 05:45:00'),
(11, 39, 'ПРИЧЕСАТЬ КАРАСЯ) ', 'ОТ ТАК ВОТ', 5, 2, 5, '2019-06-15 15:05:00', '2019-06-15 04:54:00'),
(12, 39, 'ПРИЧЕСАТЬ КАРАСЯ) ', 'ОТ ТАК ВОТ', 5, 2, 5, '2019-06-15 15:05:00', '2019-06-15 04:54:00'),
(13, 40, 'nick task name', 'nick task description', 3, 5, 1, '2019-06-14 12:02:00', '2019-06-13 12:02:00');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `username`, `email`, `password`) VALUES
(38, 'KOKO', 'vetalrusal@gmail.com', '12345'),
(39, 'TEST', 'TEST@LKJ', '11111'),
(40, 'nick', 'nick3fc@gmail.com', '12345678');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`task_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tasks`
--
ALTER TABLE `tasks`
  MODIFY `task_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tasks`
--
ALTER TABLE `tasks`
  ADD CONSTRAINT `tasks_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
