-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Июн 18 2019 г., 16:07
-- Версия сервера: 5.6.41
-- Версия PHP: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `chat`
--

-- --------------------------------------------------------

--
-- Структура таблицы `messages`
--

CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `to_user_id` int(11) NOT NULL,
  `message` text NOT NULL,
  `datetime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `messages`
--

INSERT INTO `messages` (`id`, `user_id`, `to_user_id`, `message`, `datetime`) VALUES
(1, 1, 2, 'SIEGE TIE-IN In Asgard, Taskmaster clashes with Captain America! Meanwhile, the battle for Camp H.A.M.M.E.R. reaches a fever pitch, but whose side is Penance on? ', '2019-06-18 16:07:09'),
(2, 2, 1, 'Reptil! Veil! Finesse! Hazmat! Mettle! Striker! Will they be the next generation of Earth\'s Mightiest Heroes...or the greatest threat to the Marvel Universe? The instructors at Avengers Academy ', '2019-06-18 16:07:09'),
(3, 2, 3, 'A classic Avenger is murdered and everyone\'s a suspect! ', '2019-06-18 16:07:09'),
(4, 4, 3, 'Captain America, Luke Cage, and Hawkeye guest-star to...fight the Avengers Academy? ', '2019-06-18 16:07:09'),
(5, 3, 4, 'X-23 joins Avengers Academy! Plus, Reptil\'s darkest secret is revealed! ', '2019-06-18 16:07:09'),
(6, 2, 4, 'FEAR ITSELF tie-in! The students of Avengers Academy are trapped within their school, stalked by The Worthy! Their only hope against such awesome power is to destroy the Infinite Mansion...but unless they can find a way out, they\'ll die with it! ', '2019-06-18 16:07:09'),
(7, 1, 2, 'FEAR ITSELF tie-in! The young heroes struggle against The Worthy, and will have to do whatever it takes to survive. ', '2019-06-18 16:07:09'),
(8, 2, 1, '', '2019-06-18 16:07:09'),
(9, 2, 1, 'FEAR ITSELF tie-in! Trapped in the Infinite Mansion with murderous demigods, the heroes-in-training of Avengers Academy must do the unthinkable...or die! Is this the issue where the students choose evil? ', '2019-06-18 16:07:09'),
(10, 2, 3, 'теыт', '2019-06-18 16:07:09');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `picture` varchar(200) NOT NULL DEFAULT 'views/img/simba.png',
  `password` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `username`, `picture`, `password`, `email`) VALUES
(1, 'Anole', 'views/img/simba.png', 'asda', ''),
(2, 'Blackheart', 'views/img/simba.png', 'marvel', ''),
(3, 'Blizzard', 'views/img/simba.png', 'wwwcreaft', ''),
(4, 'Blur', 'views/img/simba.png', 'asadasda', ''),
(5, 'Blue Shield', 'views/img/simba.png', '1234465', ''),
(7, 'fromPHP', 'views/img/simba.png', 'passwordFromPHP', ''),
(8, 'userFromArg', 'views/img/simba.png', 'passFromArg', ''),
(9, 'userFromArg', 'views/img/simba.png', 'passFromArg', 'emailFromArg'),
(10, 'from', 'views/img/simba.png', 'qwerty6', 'web'),
(11, 'тестим', 'views/img/simba.png', 'бубубу', 'переход'),
(12, 'тестим', 'views/img/simba.png', '11111111', 'переход'),
(13, 'тестим', 'views/img/simba.png', '222222222', 'переход'),
(14, 'test', 'views/img/simba.png', '1234', 'users'),
(15, 'я', 'views/img/simba.png', '???', 'несломал'),
(16, 'userOnWeb', 'views/img/simba.png', 'dgbdsagbg', 'true-e-e-e-e'),
(17, 'яДобавил', 'views/img/simba.png', 'Пользователя', 'Нового');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
