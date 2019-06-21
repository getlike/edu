-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Час створення: Чрв 14 2019 р., 00:13
-- Версія сервера: 10.1.34-MariaDB
-- Версія PHP: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База даних: `comand a`
--

-- --------------------------------------------------------

--
-- Структура таблиці `tasks`
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
-- Дамп даних таблиці `tasks`
--

INSERT INTO `tasks` (`task_id`, `user_id`, `task_name`, `task_description`, `task_importance`, `task_duration`, `task_difficulty`, `task_lifetime`, `task_alarm`) VALUES
(1, 38, 'Сходити до лікаря', 'taskdetails', 1, 2, 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 38, 'Вивчити англійську', 'taskdetails', 1, 2, 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 38, 'Понять пхп', 'taskdetails', 1, 2, 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 38, 'Навчитись Водити', 'taskdetails', 1, 2, 3, '2019-06-14 00:00:00', '2019-06-14 05:59:00'),
(5, 38, 'Погодувати поросят)', 'taskdetails', 1, 2, 3, '2019-06-14 00:00:00', '2019-06-20 04:04:00'),
(7, 38, 'ЗДАТИ ПРОЕКТ ', '', 5, 3, 5, '2019-06-14 04:54:00', '2019-06-14 12:12:00'),
(8, 38, 'ЗДАТИ ПРОЕКТ ', '', 5, 3, 5, '2019-06-14 04:54:00', '2019-06-14 12:12:00'),
(9, 38, 'ЗДАТИ ПРОЕКТ ', 'D 11kmljk', 3, 3, 2, '2019-06-21 05:56:00', '2019-06-21 05:45:00'),
(10, 38, 'ЗДАТИ ПРОЕКТ ', 'D 11kmljk', 3, 3, 2, '2019-06-21 05:56:00', '2019-06-21 05:45:00'),
(11, 39, 'ПРИЧЕСАТЬ КАРАСЯ) ', 'ОТ ТАК ВОТ', 5, 2, 5, '2019-06-15 15:05:00', '2019-06-15 04:54:00'),
(12, 39, 'ПРИЧЕСАТЬ КАРАСЯ) ', 'ОТ ТАК ВОТ', 5, 2, 5, '2019-06-15 15:05:00', '2019-06-15 04:54:00');

-- --------------------------------------------------------

--
-- Структура таблиці `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп даних таблиці `users`
--

INSERT INTO `users` (`user_id`, `username`, `email`, `password`) VALUES
(38, 'KOKO', 'vetalrusal@gmail.com', '12345'),
(39, 'TEST', 'TEST@LKJ', '11111');

--
-- Індекси збережених таблиць
--

--
-- Індекси таблиці `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`task_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Індекси таблиці `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT для збережених таблиць
--

--
-- AUTO_INCREMENT для таблиці `tasks`
--
ALTER TABLE `tasks`
  MODIFY `task_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT для таблиці `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- Обмеження зовнішнього ключа збережених таблиць
--

--
-- Обмеження зовнішнього ключа таблиці `tasks`
--
ALTER TABLE `tasks`
  ADD CONSTRAINT `tasks_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
