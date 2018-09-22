import { NgModule} from '@angular/core';

import { Routes, RouterModule, CanActivate } from '@angular/router';

import { SistemaComponent } from './sistema.component';

import { FonoComponent } from './fono/fono.component';
import { ConsultarFonoComponent  } from './fono/consultar-fono/consultar-fono.component';
import { ConsultarMeusFonosComponent  } from './fono/consultar-meus-fonos/consultar-meus-fonos.component';
import { FonoFormComponent  } from './fono/fono-form/fono-form.component';
import { FonoDetalheComponent } from './fono/fono-detalhe/fono-detalhe.component';

import { PacienteComponent } from './paciente/paciente.component';
import { ConsultaComponent  } from './paciente/consulta/consulta.component';
import { ConsultarMeusComponent  } from './paciente/consultar-meus/consultar-meus.component';
import { PacienteEvolucaoComponent  } from './paciente/paciente-evolucao/paciente-evolucao.component';
import { PacienteFormComponent  } from './paciente/paciente-form/paciente-form.component';
import { PacienteDetalheComponent } from './paciente/paciente-detalhe/paciente-detalhe.component';

import { AgendaComponent } from './agenda/agenda.component';
import { ConsultaAgendaComponent  } from './agenda/consulta-agenda/consulta-agenda.component';
import { CalendarioAgendaComponent  } from './agenda/calendario-agenda/calendario-agenda.component';

import { DashComponent } from './dash/dash.component';

import { JogosComponent } from "./jogos/jogos.component";
import { ListaJogosComponent } from "./jogos/lista-jogos/lista-jogos.component";
import { VideoComponent } from './video/video.component';
import { PacienteSelecionarComponent } from './paciente/paciente-selecionar/paciente-selecionar.component';


import { PerfilComponent } from "./perfil/perfil.component";
import { DashboardComponent } from "./perfil/dashboard/dashboard.component";
import { MeusDadosComponent } from "./perfil/meus-dados/meus-dados.component";
import { FonoAdminComponent } from './fono/fono-admin/fono-admin.component';
import { PacienteAdminComponent } from './paciente-admin/paciente-admin.component';
import { AuthService } from '../core/auth.service';
import { AuthGuard } from '../core/auth.guard';
import { UserAdminComponent } from './user/user-admin/user-admin.component';
import { UserViewComponent } from './user/user-view/user-view.component';
import { UserUpdateComponent } from './user/user-update/user-update.component';
import { AdminGuard } from '../core/admin.guard';


const homeRoutes = [
		{path: 'fonoaudiologo', component: SistemaComponent, children:[
			{ path: 'user',children:[
				{path: 'admin',component:UserAdminComponent, canActivate:[AdminGuard]},
				{path: 'ver',component:UserViewComponent, canActivate:[AdminGuard]},
				{path: 'atualizar',component:UserUpdateComponent, canActivate:[AdminGuard]},
			]},
			{path: 'fono', component: FonoComponent, children: [
						{path: 'novo', component: FonoFormComponent, canActivate: [AuthGuard]},
						{path: 'ver', component: FonoDetalheComponent, canActivate: [AuthGuard]},
						{path: 'admin', component: FonoAdminComponent, canActivate: [AuthGuard]},
						// {path: ':id/editar', component: FonoFormComponent}
			]},
			{path: 'fono', component: FonoComponent, children: [
				{path: 'consulta', component: ConsultarFonoComponent, canActivate: [AuthGuard]},
				{path: 'consultarMeusFonos', component: ConsultarMeusFonosComponent, canActivate: [AuthGuard]},
				// {path: ':id/editar', component: FonoFormComponent}
			]},
			{path: 'paciente', component: PacienteComponent, children: [
				{path: 'consulta', component: ConsultaComponent, canActivate: [AuthGuard]},
				{path: 'consultarMeus', component: ConsultarMeusComponent, canActivate: [AuthGuard]},
				{path: 'evolucao', component: PacienteEvolucaoComponent, canActivate: [AuthGuard]},
				{path: 'novo', component: PacienteFormComponent, canActivate: [AuthGuard]},
				{path: 'ver', component: PacienteDetalheComponent, canActivate: [AuthGuard]},
				{path: 'admin', component: PacienteAdminComponent, canActivate: [AuthGuard]},
				// {path: ':id/editar', component: FonoFormComponent}
			]},
			{path: 'jogos', component: JogosComponent, children: [
				{path: 'listaJogos', component: ListaJogosComponent, canActivate: [AuthGuard]},
			]},
			{path: 'agenda', component: AgendaComponent, children: [
				{path: 'consultaAgenda', component: ConsultaAgendaComponent, canActivate: [AuthGuard]},
				{path: 'calendarioAgenda', component: CalendarioAgendaComponent, canActivate: [AuthGuard]},
			]},
			{path: 'perfil', component: PerfilComponent, children: [
				{path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
				{path: 'meusDados', component: MeusDadosComponent, canActivate: [AuthGuard]},
			]},
			{path: 'dash', component: DashComponent, canActivate: [AuthGuard]},
			{path: 'video', component: PacienteSelecionarComponent, canActivate: [AuthGuard]}
		]}

];

@NgModule({
	imports: [
    RouterModule.forChild(homeRoutes),
  ],
  exports:[RouterModule],
  providers:[
	AuthService,
	AdminGuard
]
})
export class HomeRoutingModule{}