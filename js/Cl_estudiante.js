export default class Cl_estudiante{
    constructor(nombre, semestre, nota){
        this.nombre= nombre;
        this.semestre= semestre;
        this.nota= nota;
    }
set nombre(nombre){
    this._nombre=nombre;
}
get nombre(){
    return this._nombre;
}
set semestre(semestre){
    this._semestre=semestre;
}
get semestre(){
    return this._semestre;
}
set nota(nota){
    this._nota=nota;
}
get nota(){
    return this._nota;
}

}