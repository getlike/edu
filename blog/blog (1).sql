-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Июн 10 2019 г., 13:17
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
-- База данных: `blog`
--

-- --------------------------------------------------------

--
-- Структура таблицы `message`
--

CREATE TABLE `message` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `message` text NOT NULL,
  `datatime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `picture` varchar(200) NOT NULL,
  `rate` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `message`
--

INSERT INTO `message` (`id`, `user_id`, `message`, `datatime`, `picture`, `rate`) VALUES
(1, 2, 'Lorem Ipsum - это текст-\"рыба\", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной \"рыбой\" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.', '2019-06-10 12:09:40', 'https://neilpatel.com/wp-content/uploads/2017/08/blog.jpg', 2),
(2, 2, 'Lorem Ipsum - это текст-\"рыба\", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной \"рыбой\" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.', '2019-06-10 12:09:43', 'https://neilpatel.com/wp-content/uploads/2017/08/blog.jpg', 2);

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `photo` varchar(200) NOT NULL DEFAULT 'https://image.shutterstock.com/z/stock-photo-asian-girl-take-look-at-digital-camera-in-park-with-sunglasses-742236094.jpg',
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `username`, `photo`, `email`, `password`) VALUES
(1, 'user', '', 'from', 'html'),
(2, 'юзериха', '', 'со стандартной фоточкой', 'гуси'),
(6, 'login', 'https://image.shutterstock.com/z/stock-photo-asian-girl-take-look-at-digital-camera-in-park-with-sunglasses-742236094.jpg', 'email', '111111111111111'),
(7, 'actiontest', 'https://image.shutterstock.com/z/stock-photo-asian-girl-take-look-at-digital-camera-in-park-with-sunglasses-742236094.jpg', 'emailTest', 'action'),
(8, '', 'https://image.shutterstock.com/z/stock-photo-asian-girl-take-look-at-digital-camera-in-park-with-sunglasses-742236094.jpg', '', ''),
(9, '', 'https://image.shutterstock.com/z/stock-photo-asian-girl-take-look-at-digital-camera-in-park-with-sunglasses-742236094.jpg', '', ''),
(10, 'user1', 'https://image.shutterstock.com/z/stock-photo-asian-girl-take-look-at-digital-camera-in-park-with-sunglasses-742236094.jpg', 'user1', 'password1'),
(11, 'vasya', 'https://image.shutterstock.com/z/stock-photo-asian-girl-take-look-at-digital-camera-in-park-with-sunglasses-742236094.jpg', 'vasya@i.ua', '123');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `message`
--
ALTER TABLE `message`
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
-- AUTO_INCREMENT для таблицы `message`
--
ALTER TABLE `message`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
