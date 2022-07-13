-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 30-04-2022 a las 17:44:53
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 7.4.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyecto`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `creacion`
--

CREATE TABLE `creacion` (
  `Id_empleaos_H` varchar(10) NOT NULL,
  `Dia` int(11) NOT NULL,
  `Mes` char(15) NOT NULL,
  `Año` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `creacion`
--

INSERT INTO `creacion` (`Id_empleaos_H`, `Dia`, `Mes`, `Año`) VALUES
('1042240671', 1, 'Abril', 2022),
('1042240671', 2, 'Abril', 2022),
('1042240671', 4, 'Abril', 2022),
('1042240671', 5, 'Abril', 2022),
('1042240671', 7, 'Abril', 2022),
('1042240671', 10, 'Abril', 2022),
('1042240671', 13, 'Abril', 2022),
('1042240671', 14, 'Abril', 2022),
('1042240671', 16, 'Abril', 2022),
('1042240671', 17, 'Abril', 2022),
('1042240671', 20, 'Abril', 2022),
('1042240671', 22, 'Abril', 2022),
('1042240671', 24, 'Abril', 2022),
('1042240671', 25, 'Abril', 2022),
('1042240671', 28, 'Abril', 2022),
('1043136019', 1, 'Abril', 2022),
('1043136019', 2, 'Abril', 2022),
('1043136019', 4, 'Abril', 2022),
('1043136019', 5, 'Abril', 2022),
('1043136019', 8, 'Abril', 2022),
('1043136019', 11, 'Abril', 2022),
('1043136019', 13, 'Abril', 2022),
('1043136019', 14, 'Abril', 2022),
('1043136019', 16, 'Abril', 2022),
('1043136019', 17, 'Abril', 2022),
('1043136019', 20, 'Abril', 2022),
('1043136019', 21, 'Abril', 2022),
('1043136019', 25, 'Abril', 2022),
('1043136019', 26, 'Abril', 2022),
('1043136019', 29, 'Abril', 2022),
('1048273079', 1, 'Abril', 2022),
('1048273079', 2, 'Abril', 2022),
('1048273079', 6, 'Abril', 2022),
('1048273079', 7, 'Abril', 2022),
('1048273079', 9, 'Abril', 2022),
('1048273079', 11, 'Abril', 2022),
('1048273079', 13, 'Abril', 2022),
('1048273079', 14, 'Abril', 2022),
('1048273079', 18, 'Abril', 2022),
('1048273079', 19, 'Abril', 2022),
('1048273079', 22, 'Abril', 2022),
('1048273079', 23, 'Abril', 2022),
('1048273079', 26, 'Abril', 2022),
('1048273079', 27, 'Abril', 2022),
('1048273079', 29, 'Abril', 2022),
('32867025', 3, 'Abril', 2022),
('32867025', 4, 'Abril', 2022),
('32867025', 6, 'Abril', 2022),
('32867025', 7, 'Abril', 2022),
('32867025', 9, 'Abril', 2022),
('32867025', 11, 'Abril', 2022),
('32867025', 15, 'Abril', 2022),
('32867025', 16, 'Abril', 2022),
('32867025', 18, 'Abril', 2022),
('32867025', 20, 'Abril', 2022),
('32867025', 23, 'Abril', 2022),
('32867025', 24, 'Abril', 2022),
('32867025', 26, 'Abril', 2022),
('32867025', 27, 'Abril', 2022),
('32867025', 29, 'Abril', 2022);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `credenciales`
--

CREATE TABLE `credenciales` (
  `Usuario` varchar(20) NOT NULL,
  `Contraseña` varchar(20) NOT NULL,
  `ide_personal` varchar(10) NOT NULL,
  `tipodeusuario` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `credenciales`
--

INSERT INTO `credenciales` (`Usuario`, `Contraseña`, `ide_personal`, `tipodeusuario`) VALUES
('ABujato', '1001821002', '1001821002', 'Jefe'),
('JUrdaneta', '1002161060', '1002161060', 'Jefe'),
('DSandoval', '1004210431', '1004210431', 'Empleado'),
('EAngulo', '1004275007', '1004275007', 'Empleado'),
('DVesga', '1042240671', '1042240671', 'Empleado'),
('SGómez', '1042354613', '1042354613', 'Empleado'),
('GVillarreal', '1043136019', '1043136019', 'Empleado'),
('DCriba', '1043463985', '1043463985', 'Empleado'),
('JdGarizao', '1044210431', '1044210431', 'Admin'),
('MUrueta', '1048273079', '1048273079', 'Empleado'),
('IMejía', '1129573854', '1129573854', 'Empleado'),
('JDe avila', '1143348605', '1143348605', 'Empleado'),
('BGiraldo', '1143425346', '1143425346', 'Empleado'),
('BMejía', '32823459', '32823459', 'Jefe'),
('IDe Moya', '32867025', '32867025', 'Empleado'),
('JVanegas', '77673834', '77673834', 'Empleado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

CREATE TABLE `empleados` (
  `id_empleado_e` varchar(10) NOT NULL,
  `cargo` varchar(30) NOT NULL,
  `dpto_nombre` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`id_empleado_e`, `cargo`, `dpto_nombre`) VALUES
('1042240671', 'Medico general', 'Urgencias'),
('1143425346', 'Medico general', 'Urgencias'),
('1043136019', 'Medico general', 'Urgencias'),
('1048273079', 'Medico general', 'Urgencias'),
('32867025', 'Medico general', 'Urgencias'),
('1143348605', 'Médico internista', 'Urgencias'),
('77673834', 'Médico internista', 'Urgencias'),
('1042354613', 'Médico internista', 'Urgencias'),
('1129573854', 'Médico internista', 'Urgencias'),
('1043463985', 'Médico internista', 'Urgencias'),
('1004275007', 'Médico internista', 'Urgencias'),
('1004210431', 'Médico internista', 'Urgencias');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `horario`
--

CREATE TABLE `horario` (
  `Turno` varchar(15) NOT NULL,
  `Horas_al_mes` int(11) NOT NULL,
  `Horas_al_dia` int(11) NOT NULL,
  `id_empleado` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `horario`
--

INSERT INTO `horario` (`Turno`, `Horas_al_mes`, `Horas_al_dia`, `id_empleado`) VALUES
('Diurno', 178, 8, '1001821002'),
('Diurno', 200, 10, '1002161060'),
('Diurno', 178, 8, '1004210431'),
('Diurno', 200, 10, '1004275007'),
('Diurno', 178, 8, '1042240671'),
('Diurno', 200, 10, '1042354613'),
('Diurno', 178, 8, '1043136019'),
('Diurno', 200, 10, '1043463985'),
('Diurno', 178, 8, '1048273079'),
('Diurno', 200, 9, '1129573854'),
('Diurno', 200, 10, '1143348605'),
('Diurno', 178, 8, '1143425346'),
('Diurno', 178, 8, '32823459'),
('Diurno', 178, 8, '32867025'),
('Diurno', 200, 10, '77673834');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `jefe`
--

CREATE TABLE `jefe` (
  `ide_empleado_J` varchar(10) NOT NULL,
  `nombrede_empleado` int(11) NOT NULL,
  `nom_dpto_cargo` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `jefe`
--

INSERT INTO `jefe` (`ide_empleado_J`, `nombrede_empleado`, `nom_dpto_cargo`) VALUES
('1001821002', 20, 'Ginecologia'),
('1002161060', 20, 'Urgencias');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personal`
--

CREATE TABLE `personal` (
  `Nombre` varchar(20) NOT NULL,
  `Apellido` varchar(20) NOT NULL,
  `Numero_identidad` varchar(10) NOT NULL,
  `Telefono` varchar(10) NOT NULL,
  `Correo` varchar(100) NOT NULL,
  `estado` char(10) NOT NULL,
  `Genero` char(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `personal`
--

INSERT INTO `personal` (`Nombre`, `Apellido`, `Numero_identidad`, `Telefono`, `Correo`, `estado`, `Genero`) VALUES
('Abigail', 'Bujato', '1001821002', '3023587445', 'jesusd111223@gmail.com', 'Activo', 'Femenino'),
('Jhoynier', 'Udaneta', '1002161060', '3013260995', 'jhoynier2@hotmail.com', 'Activo', 'Masculino'),
('Diego', 'Urdaneta', '1004210431', '3044300928', 'jesusd111223@gmail.com', 'Activo', 'Masculino'),
('Ever', 'Angulo', '1004275007', '3208930390', 'andresangulo327@hotmail.com', 'Activo', 'Masculino'),
('Maria', 'Mejia', '1042240671', '3208437248', 'dannav.3001@gmail.com', 'Activo', 'Femenino'),
('Sandra', 'Gómez', '1042354613', '3122460875', 'sharol-gomez@hotmail.com', 'Activo', 'Masculino'),
('Giselle ', 'Villarreal', '1043136019', '3003661604', 'jesusd111223@gmail.com', 'Activo', 'Femenino'),
('Daniela', 'Criba', '1043463985', '3002062983', 'danielaandreinacribaherrera@gmail.com', 'Activo', 'Femenino'),
('Jesus', 'Garizao', '1044210431', '3044300928', 'jesudgm.11@gmail.com', 'Activo', 'Masculino'),
('Mario', 'Urueta', '1048273079', '3156301906', 'mlurueta@outlook.com', 'Activo', 'Femenino'),
('Iliana', 'Mejía', '1129573854', '3156301906', 'Iliana.mejia.n@gmail.com', 'Inactivo', 'Femenino'),
('Jisell', 'De avila', '1143348605', '3012276000', 'Deavilamadrid@outlook.com', 'Activo', 'Femenino'),
('Braian', 'Giraldo', '1143425346', '3206058147', 'briango_04@hotmail.com', 'Inactivo', 'Masculino'),
('Berena', 'Mejía', '32823459', '3046637817', 'berena-18@hotmail.com', 'Activo', 'Femenino'),
('Ingrid', 'De Moya', '32867025', '3045214021', 'ingedm1106@gmail.com', 'Activo', 'Femenino'),
('Juan', 'Vanegas', '77673834', '3016549354', 'Edvanegas@gmai.com', 'Activo', 'Masculino');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `creacion`
--
ALTER TABLE `creacion`
  ADD PRIMARY KEY (`Id_empleaos_H`,`Dia`,`Mes`,`Año`),
  ADD KEY `Id_empleaos_H` (`Id_empleaos_H`);

--
-- Indices de la tabla `credenciales`
--
ALTER TABLE `credenciales`
  ADD UNIQUE KEY `ide_personal_2` (`ide_personal`),
  ADD KEY `ide_personal` (`ide_personal`);

--
-- Indices de la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD KEY `id_empleado_e` (`id_empleado_e`),
  ADD KEY `dpto_nombre` (`dpto_nombre`),
  ADD KEY `id_empleado_e_2` (`id_empleado_e`);

--
-- Indices de la tabla `horario`
--
ALTER TABLE `horario`
  ADD UNIQUE KEY `id_empleado_2` (`id_empleado`),
  ADD KEY `id_empleado` (`id_empleado`);

--
-- Indices de la tabla `jefe`
--
ALTER TABLE `jefe`
  ADD PRIMARY KEY (`nom_dpto_cargo`),
  ADD KEY `ide_empleado_J` (`ide_empleado_J`);

--
-- Indices de la tabla `personal`
--
ALTER TABLE `personal`
  ADD PRIMARY KEY (`Numero_identidad`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `creacion`
--
ALTER TABLE `creacion`
  ADD CONSTRAINT `creacion_ibfk_1` FOREIGN KEY (`Id_empleaos_H`) REFERENCES `personal` (`Numero_identidad`);

--
-- Filtros para la tabla `credenciales`
--
ALTER TABLE `credenciales`
  ADD CONSTRAINT `credenciales_ibfk_1` FOREIGN KEY (`ide_personal`) REFERENCES `personal` (`Numero_identidad`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD CONSTRAINT `empleados_ibfk_4` FOREIGN KEY (`dpto_nombre`) REFERENCES `jefe` (`nom_dpto_cargo`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `empleados_ibfk_5` FOREIGN KEY (`id_empleado_e`) REFERENCES `personal` (`Numero_identidad`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `horario`
--
ALTER TABLE `horario`
  ADD CONSTRAINT `horario_ibfk_1` FOREIGN KEY (`id_empleado`) REFERENCES `personal` (`Numero_identidad`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `jefe`
--
ALTER TABLE `jefe`
  ADD CONSTRAINT `jefe_ibfk_1` FOREIGN KEY (`ide_empleado_J`) REFERENCES `personal` (`Numero_identidad`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
