ALTER TABLE `tb_evolucao` DROP FOREIGN KEY `fk_tb_evolucao_fonoaudiologo`; ALTER TABLE `tb_evolucao` ADD CONSTRAINT `fk_tb_evolucao_fonoaudiologo` FOREIGN KEY (`fk_fonoaudiologo`) REFERENCES `tb_fonoaudiologo`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION; ALTER TABLE `tb_evolucao` DROP FOREIGN KEY `fk_tb_evolucao_paciente`; ALTER TABLE `tb_evolucao` ADD CONSTRAINT `fk_tb_evolucao_paciente` FOREIGN KEY (`fk_paciente`) REFERENCES `tb_paciente`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;