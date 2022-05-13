var date_len;
document.getElementById('table_PL').classList.remove('table_show');
document.getElementById('table_FL').classList.remove('table_show');

function collect_data(){
    document.getElementById('alert').classList.remove('error_show');
    document.getElementById('error_message').textContent="Please fill required data fields!!!";
    var name=document.getElementById('name').value;
    var cost=document.getElementById('cost').value;
    var date_purch=document.getElementById('date_purch').value;
    var date_calc=document.getElementById('date_calc').value;
    var use_life=document.getElementById('use_life').value;
    var res_val=document.getElementById('res_val').value;
    var method=document.getElementById('method').value;
    var date1 = new Date(date_purch);
    var date2 = new Date(date_calc);
    var diffDays = parseInt(((date2 - date1)/(1000 * 60 * 60 * 24))/365); 
    
    if(name==''){
        show_error();
    }else if(cost==''){
        show_error();
    }else if(date_purch==''){
        show_error();
    }else if(date_calc==''){
        show_error();
    }else if(use_life==''){
        show_error();
    }else if(res_val==''){
        show_error();
    }else if(diffDays>use_life){
        document.getElementById('error_message').textContent="The difference between the entered days is greater than usefull life!!!";
        show_error();
    }else if(method==1){
        var dep_per_year=(cost-res_val)/use_life;
        var tot_dep=dep_per_year*diffDays;
        var current_val=cost-tot_dep;
        pass_table1(name,dep_per_year);
        pass_table2(name,current_val);
        document.getElementById('table_PL').classList.add('table_show');
        document.getElementById('table_FL').classList.add('table_show');
        }else{
            var i=1,tot_dep=0,cost;
            var squart=res_val/cost;
            squart=Math.pow(squart,1/use_life);
            var rate=(1-squart)*100;
            while(i<=diffDays){
                dep_per_year=cost*rate/100;
                tot_dep+=dep_per_year;
                cost-=dep_per_year;
                i++;
            }
            pass_table1(name,dep_per_year);
            pass_table2(name,cost);
            document.getElementById('table_PL').classList.add('table_show');
            document.getElementById('table_FL').classList.add('table_show');
        }
    }

function show_error(){
    document.getElementById('alert').classList.add('error_show');
}

function pass_table1(name,dep_cost){
    var template=`
                <tr>
                    <td>${name} depreciation</td>
                    <td class='text-end'>${dep_cost.toFixed(2)}</td>
                </tr>`;
    document.getElementById('table_PL').innerHTML+=template;
}

function pass_table2(name,value){
    var template=`
                <tr>
                    <td>${name}</td>
                    <td class='text-end'>${value.toFixed(2)}</td>
                </tr>`;
    document.getElementById('table_FL').innerHTML+=template;
}