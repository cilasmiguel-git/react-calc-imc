export type Level =
{
    title:string;
    color:string;
    icon:'down'|'up';
    imc: number[],
    yourImc?: number;
}
export const levels:Level[] =
[
    {title:'magro',color:'#96A3AB',icon:'down',imc:[0,18.59]},
    {title:'normal',color:'#0EAD69',icon:'up',imc:[18.6,24.99]},
    {title:'sobrepeso',color:'#E20039',icon:'down',imc:[25,30]},
    {title:'Obesidade',color:'#C3423F',icon:'down',imc:[30.1,190]},
]
export const calculateimc = (height:number,weight:number) =>
{
    const imc = weight/(height * height);

    for (let i in levels)
    {
        if(imc >= levels[i].imc[0] && imc <= levels[i].imc[1])
        {
            let levelCopy:Level = {...levels[i]}
            levelCopy.yourImc = parseFloat( imc.toFixed(2) ) ;
            return levels[i];
        }
    }
    return null

}