-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Июн 13 2019 г., 14:58
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
  `head` varchar(200) NOT NULL DEFAULT 'Без названия',
  `user_id` int(11) NOT NULL,
  `message` text NOT NULL,
  `datatime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
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
(12, 'рыба 2', 14, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi assumenda autem corporis culpa cum dicta, dolorum ea exercitationem, inventore ipsa, nam nobis odit perspiciatis quia quos ratione suscipit voluptatibus!\r\n\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit. A animi assumenda autem corporis culpa cum dicta, dolorum ea exercitationem, inventore ipsa, nam nobis odit perspiciatis quia quos ratione suscipit voluptatibus!\r\n\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit. A animi assumenda autem corporis culpa cum dicta, dolorum ea exercitationem, inventore ipsa, nam nobis odit perspiciatis quia quos ratione suscipit voluptatibus!\r\n\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit. A animi assumenda autem corporis culpa cum dicta, dolorum ea exercitationem, inventore ipsa, nam nobis odit perspiciatis quia quos ratione suscipit voluptatibus!\r\n\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit. A animi assumenda autem corporis culpa cum dicta, dolorum ea exercitationem, inventore ipsa, nam nobis odit perspiciatis quia quos ratione suscipit voluptatibus!\r\n\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit. A animi assumenda autem corporis culpa cum dicta, dolorum ea exercitationem, inventore ipsa, nam nobis odit perspiciatis quia quos ratione suscipit voluptatibus!', '2019-06-10 12:09:43', 'https://neilpatel.com/wp-content/uploads/2017/08/blog.jpg', 2),
(13, 'без ключа', 14, 'без ключа !без ключа !без ключа !без ключа !без ключа !без ключа !без ключа !без ключа !без ключа !без ключа !без ключа !без ключа !без ключа !без ключа !без ключа !без ключа !без ключа !без ключа !без ключа !без ключа !без ключа !без ключа !без ключа !без ключа !без ключа !без ключа !без ключа !без ключа !без ключа !без ключа !без ключа !без ключа !без ключа !', '2019-06-12 12:27:11', '', 0),
(14, 'заголовок', 14, 'тело сообщения', '2019-06-12 12:29:27', '', 0),
(15, 'заголовок', 14, 'тело сообщения', '2019-06-12 12:29:43', '', 5),
(26, '', 14, 'sfsfdsf sdf sf sd fsd ', '2019-06-12 13:03:47', '', 0),
(27, 'test101', 14, 'sfsfdsf sdf sf sd fsd ', '2019-06-12 13:05:09', '', 0),
(29, 'Тег &lt;blockquote&gt;', 14, 'Описание\r\nТег &lt;blockquote&gt; предназначен для выделения длинных цитат внутри документа. Текст, обозначенный этим тегом, традиционно отображается как выровненный блок с отступами слева и справа (примерно по 40 пикселов), а также с отбивкой сверху и снизу.\r\n\r\nСинтаксис\r\n&lt;blockquote&gt;Текст&lt;/blockquote&gt;\r\nЗакрывающий тег\r\nОбязателен.\r\n\r\nАтрибуты\r\ncite\r\nАдрес, который указывает на источник цитаты.\r\nДля этого тега доступны универсальные атрибуты и события.\r\n\r\nПример\r\n\r\nHTML5IECrOpSaFx\r\n\r\n&lt;!DOCTYPE HTML&gt;\r\n&lt;html&gt;\r\n &lt;head&gt;\r\n  &lt;meta charset=&quot;utf-8&quot;&gt;\r\n  &lt;title&gt;Тег BLOCKQUOTE&lt;/title&gt;\r\n &lt;/head&gt;\r\n &lt;body&gt;\r\n\r\n  &lt;hr&gt;\r\n  &lt;blockquote&gt;\r\n   &lt;p&gt;Lorem ipsum dolor sit amet, consectetuer adipiscing elit, \r\n   sed diem nonummy nibh euismod tincidunt ut lacreet dolore magna aliguam erat \r\n   volutpat. Ut wisis enim ad minim veniam, quis nostrud exerci tution ullamcorper \r\n   suscipit lobortis nisl ut aliquip ex ea commodo consequat.&lt;/p&gt;\r\n  &lt;/blockquote&gt;\r\n  &lt;hr&gt;\r\n\r\n &lt;/body&gt;\r\n&lt;/html&gt;', '2019-06-12 13:17:50', '', 0),
(32, 'тратата', 14, 'мы везем с собой (нужное выбрать )мы везем с собой (нужное выбрать )мы везем с собой (нужное выбрать )мы везем с собой (нужное выбрать )мы везем с собой (нужное выбрать )мы везем с собой (нужное выбрать )мы везем с собой (нужное выбрать )мы везем с собой (нужное выбрать )мы везем с собой (нужное выбрать )мы везем с собой (нужное выбрать )мы везем с собой (нужное выбрать )мы везем с собой (нужное выбрать )мы везем с собой (нужное выбрать )мы везем с собой (нужное выбрать )мы везем с собой (нужное выбрать )мы везем с собой (нужное выбрать )мы везем с собой (нужное выбрать )мы везем с собой (нужное выбрать )мы везем с собой (нужное выбрать )мы везем с собой (нужное выбрать )мы везем с собой (нужное выбрать )мы везем с собой (нужное выбрать )мы везем с собой (нужное выбрать )мы везем с собой (нужное выбрать )', '2019-06-12 13:26:55', '/img/sketch.jpg', 0),
(34, 'рулим', 14, 'мршщфвг зкщшгрзфв гркзфвкгрпизфшкгп ризшкгп зфшквп фшвк гпфзшвк швкфп рфшкгп шзвгрфшв пгзкпг рфзп гршкг пзшвп', '2019-06-12 14:31:58', '', 0);

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
(14, 'admin', 'https://image.shutterstock.com/z/stock-photo-asian-girl-take-look-at-digital-camera-in-park-with-sunglasses-742236094.jpg', 'admin@i.ua', '123456'),
(15, 'getlike', 'https://image.shutterstock.com/z/stock-photo-asian-girl-take-look-at-digital-camera-in-park-with-sunglasses-742236094.jpg', 'getlike@i.ua', '607655');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
