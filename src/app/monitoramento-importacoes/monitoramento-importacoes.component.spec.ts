import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoramentoImportacoesComponent } from './monitoramento-importacoes.component';

describe('MonitoramentoImportacoesComponent', () => {
  let component: MonitoramentoImportacoesComponent;
  let fixture: ComponentFixture<MonitoramentoImportacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonitoramentoImportacoesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonitoramentoImportacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate metrics correctly', () => {
    component.aplicarFiltros();
    expect(component.metricas.totalImportacoes).toBeGreaterThanOrEqual(0);
  });

  it('should filter importacoes by servidor', () => {
    component.filtroServidor = 'COBTEC';
    component.aplicarFiltros();
    const filteredByCobtec = component.importacoesFiltradas.filter(i => i.servidor === 'COBTEC');
    expect(component.importacoesFiltradas.length).toBe(filteredByCobtec.length);
  });

  it('should clear filters', () => {
    component.filtroServidor = 'COBTEC';
    component.filtroEmpresa = 'Test';
    component.limparFiltros();
    expect(component.filtroServidor).toBe('');
    expect(component.filtroEmpresa).toBe('');
  });

  it('should return correct status color', () => {
    expect(component.getStatusColor('sucesso')).toBe('primary');
    expect(component.getStatusColor('erro')).toBe('warn');
    expect(component.getStatusColor('warning')).toBe('accent');
  });

  it('should return correct status icon', () => {
    expect(component.getStatusIcon('sucesso')).toBe('check_circle');
    expect(component.getStatusIcon('erro')).toBe('error');
    expect(component.getStatusIcon('warning')).toBe('warning');
  });

  it('should format currency correctly', () => {
    const formatted = component.formatarMoeda(1000.50);
    expect(formatted).toContain('R$');
    expect(formatted).toContain('1.000,50');
  });

  it('should format number correctly', () => {
    const formatted = component.formatarNumero(1000);
    expect(formatted).toBe('1.000');
  });
});