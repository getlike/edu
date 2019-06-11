-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Июн 11 2019 г., 21:30
-- Версия сервера: 10.3.13-MariaDB
-- Версия PHP: 7.1.22

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
  `head` varchar(200) NOT NULL DEFAULT 'Без названия',
  `user_id` int(11) NOT NULL,
  `message` text NOT NULL,
  `datatime` datetime NOT NULL DEFAULT current_timestamp(),
  `picture` varchar(200) NOT NULL,
  `rate` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `message`
--

INSERT INTO `message` (`id`, `head`, `user_id`, `message`, `datatime`, `picture`, `rate`) VALUES
(1, 'Рыба', 2, 'Lorem Ipsum - это текст-\"рыба\", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной \"рыбой\" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.', '2019-06-10 12:09:40', 'https://neilpatel.com/wp-content/uploads/2017/08/blog.jpg', 2),
(2, 'рыба 2', 1, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi assumenda autem corporis culpa cum dicta, dolorum ea exercitationem, inventore ipsa, nam nobis odit perspiciatis quia quos ratione suscipit voluptatibus!\r\n\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit. A animi assumenda autem corporis culpa cum dicta, dolorum ea exercitationem, inventore ipsa, nam nobis odit perspiciatis quia quos ratione suscipit voluptatibus!\r\n\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit. A animi assumenda autem corporis culpa cum dicta, dolorum ea exercitationem, inventore ipsa, nam nobis odit perspiciatis quia quos ratione suscipit voluptatibus!\r\n\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit. A animi assumenda autem corporis culpa cum dicta, dolorum ea exercitationem, inventore ipsa, nam nobis odit perspiciatis quia quos ratione suscipit voluptatibus!\r\n\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit. A animi assumenda autem corporis culpa cum dicta, dolorum ea exercitationem, inventore ipsa, nam nobis odit perspiciatis quia quos ratione suscipit voluptatibus!\r\n\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit. A animi assumenda autem corporis culpa cum dicta, dolorum ea exercitationem, inventore ipsa, nam nobis odit perspiciatis quia quos ratione suscipit voluptatibus!', '2019-06-10 12:09:43', 'https://neilpatel.com/wp-content/uploads/2017/08/blog.jpg', 2),
(5, 'Рыба', 6, 'Lorem Ipsum - это текст-\"рыба\", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной \"рыбой\" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.', '2019-06-10 12:09:40', 'https://neilpatel.com/wp-content/uploads/2017/08/blog.jpg', 2),
(6, 'рыба 2', 7, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi assumenda autem corporis culpa cum dicta, dolorum ea exercitationem, inventore ipsa, nam nobis odit perspiciatis quia quos ratione suscipit voluptatibus!\r\n\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit. A animi assumenda autem corporis culpa cum dicta, dolorum ea exercitationem, inventore ipsa, nam nobis odit perspiciatis quia quos ratione suscipit voluptatibus!\r\n\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit. A animi assumenda autem corporis culpa cum dicta, dolorum ea exercitationem, inventore ipsa, nam nobis odit perspiciatis quia quos ratione suscipit voluptatibus!\r\n\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit. A animi assumenda autem corporis culpa cum dicta, dolorum ea exercitationem, inventore ipsa, nam nobis odit perspiciatis quia quos ratione suscipit voluptatibus!\r\n\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit. A animi assumenda autem corporis culpa cum dicta, dolorum ea exercitationem, inventore ipsa, nam nobis odit perspiciatis quia quos ratione suscipit voluptatibus!\r\n\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit. A animi assumenda autem corporis culpa cum dicta, dolorum ea exercitationem, inventore ipsa, nam nobis odit perspiciatis quia quos ratione suscipit voluptatibus!', '2019-06-10 12:09:43', 'https://neilpatel.com/wp-content/uploads/2017/08/blog.jpg', 2),
(7, 'Рыба', 10, 'Lorem Ipsum - это текст-\"рыба\", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной \"рыбой\" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.', '2019-06-10 12:09:40', 'https://neilpatel.com/wp-content/uploads/2017/08/blog.jpg', 2),
(8, 'рыба 2', 11, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi assumenda autem corporis culpa cum dicta, dolorum ea exercitationem, inventore ipsa, nam nobis odit perspiciatis quia quos ratione suscipit voluptatibus!\r\n\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit. A animi assumenda autem corporis culpa cum dicta, dolorum ea exercitationem, inventore ipsa, nam nobis odit perspiciatis quia quos ratione suscipit voluptatibus!\r\n\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit. A animi assumenda autem corporis culpa cum dicta, dolorum ea exercitationem, inventore ipsa, nam nobis odit perspiciatis quia quos ratione suscipit voluptatibus!\r\n\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit. A animi assumenda autem corporis culpa cum dicta, dolorum ea exercitationem, inventore ipsa, nam nobis odit perspiciatis quia quos ratione suscipit voluptatibus!\r\n\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit. A animi assumenda autem corporis culpa cum dicta, dolorum ea exercitationem, inventore ipsa, nam nobis odit perspiciatis quia quos ratione suscipit voluptatibus!\r\n\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit. A animi assumenda autem corporis culpa cum dicta, dolorum ea exercitationem, inventore ipsa, nam nobis odit perspiciatis quia quos ratione suscipit voluptatibus!', '2019-06-10 12:09:43', 'https://neilpatel.com/wp-content/uploads/2017/08/blog.jpg', 2),
(9, 'Рыба', 12, 'Lorem Ipsum - это текст-\"рыба\", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной \"рыбой\" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.', '2019-06-10 12:09:40', 'https://neilpatel.com/wp-content/uploads/2017/08/blog.jpg', 2),
(10, 'рыба 2', 13, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi assumenda autem corporis culpa cum dicta, dolorum ea exercitationem, inventore ipsa, nam nobis odit perspiciatis quia quos ratione suscipit voluptatibus!\r\n\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit. A animi assumenda autem corporis culpa cum dicta, dolorum ea exercitationem, inventore ipsa, nam nobis odit perspiciatis quia quos ratione suscipit voluptatibus!\r\n\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit. A animi assumenda autem corporis culpa cum dicta, dolorum ea exercitationem, inventore ipsa, nam nobis odit perspiciatis quia quos ratione suscipit voluptatibus!\r\n\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit. A animi assumenda autem corporis culpa cum dicta, dolorum ea exercitationem, inventore ipsa, nam nobis odit perspiciatis quia quos ratione suscipit voluptatibus!\r\n\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit. A animi assumenda autem corporis culpa cum dicta, dolorum ea exercitationem, inventore ipsa, nam nobis odit perspiciatis quia quos ratione suscipit voluptatibus!\r\n\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit. A animi assumenda autem corporis culpa cum dicta, dolorum ea exercitationem, inventore ipsa, nam nobis odit perspiciatis quia quos ratione suscipit voluptatibus!', '2019-06-10 12:09:43', 'https://neilpatel.com/wp-content/uploads/2017/08/blog.jpg', 2),
(11, 'Рыба', 15, 'Lorem Ipsum - это текст-\"рыба\", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной \"рыбой\" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.', '2019-06-10 12:09:40', 'https://neilpatel.com/wp-content/uploads/2017/08/blog.jpg', 2),
(12, 'рыба 2', 14, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi assumenda autem corporis culpa cum dicta, dolorum ea exercitationem, inventore ipsa, nam nobis odit perspiciatis quia quos ratione suscipit voluptatibus!\r\n\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit. A animi assumenda autem corporis culpa cum dicta, dolorum ea exercitationem, inventore ipsa, nam nobis odit perspiciatis quia quos ratione suscipit voluptatibus!\r\n\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit. A animi assumenda autem corporis culpa cum dicta, dolorum ea exercitationem, inventore ipsa, nam nobis odit perspiciatis quia quos ratione suscipit voluptatibus!\r\n\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit. A animi assumenda autem corporis culpa cum dicta, dolorum ea exercitationem, inventore ipsa, nam nobis odit perspiciatis quia quos ratione suscipit voluptatibus!\r\n\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit. A animi assumenda autem corporis culpa cum dicta, dolorum ea exercitationem, inventore ipsa, nam nobis odit perspiciatis quia quos ratione suscipit voluptatibus!\r\n\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit. A animi assumenda autem corporis culpa cum dicta, dolorum ea exercitationem, inventore ipsa, nam nobis odit perspiciatis quia quos ratione suscipit voluptatibus!', '2019-06-10 12:09:43', 'https://neilpatel.com/wp-content/uploads/2017/08/blog.jpg', 2);

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
(10, 'user1', 'https://image.shutterstock.com/z/stock-photo-asian-girl-take-look-at-digital-camera-in-park-with-sunglasses-742236094.jpg', 'user1', 'password1'),
(11, 'vasya', 'https://image.shutterstock.com/z/stock-photo-asian-girl-take-look-at-digital-camera-in-park-with-sunglasses-742236094.jpg', 'vasya@i.ua', '123'),
(12, 'Арсентий Владимирович', 'https://image.shutterstock.com/z/stock-photo-asian-girl-take-look-at-digital-camera-in-park-with-sunglasses-742236094.jpg', 'arsentiyscherbakov@gmail.com', '123'),
(13, 'йцу', 'https://image.shutterstock.com/z/stock-photo-asian-girl-take-look-at-digital-camera-in-park-with-sunglasses-742236094.jpg', '12312', '32323'),
(14, 'admin', 'https://image.shutterstock.com/z/stock-photo-asian-girl-take-look-at-digital-camera-in-park-with-sunglasses-742236094.jpg', 'admin', '123456'),
(15, 'getlike', 'https://image.shutterstock.com/z/stock-photo-asian-girl-take-look-at-digital-camera-in-park-with-sunglasses-742236094.jpg', 'getlike@i.ua', '607655');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `message`
--
ALTER TABLE `message`
  ADD CONSTRAINT `message_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
