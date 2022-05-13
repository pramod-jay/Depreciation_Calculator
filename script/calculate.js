function collect_data(){
    document.getElementById('alert').classList.remove('error_show');
    var name=document.getElementById('name').value;
    var cost=document.getElementById('cost').value;
    var date_purch=document.getElementById('date_purch').value;
    var date_calc=document.getElementById('date_calc').value;
    var use_life=document.getElementById('use_life').value;
    var res_val=document.getElementById('res_val').value;
    var method=document.getElementById('method').value;

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
    }else{
        if(method==1){
            document.write('1');
            straight_line();
        }else{
            document.write('2');
        }
    }
}

function show_error(){
    document.getElementById('alert').classList.add('error_show');
}

function straight_line(){
    
}