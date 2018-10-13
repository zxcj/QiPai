AR.log("QP AR v1.0");

AR.onload = function() {
    PlayFishesAnimation();  
    EnvironmentAnimation();
    AR.particle_emit("TeXiao_Lizi",true);
    AR.set_visible("UI1_tishi",true);
    AR.setTimeout(function(){
        AR.set_visible("UI1_tishi",false);
    },3000);
};

AR.onbegin = function(clipId) {
};

AR.onend = function(clipId) {
};

AR.onclick = function(nodeId, x, y) {
    OnClickFish(nodeId);

    if(nodeId=="UI2_pick"){

    };

    if(nodeId=="UI2_daizou"){

    };


};






function EnvironmentAnimation() {
    for (var i = 680; i < (680 + 35); i++) {
        AR.play("Bone" + i + "#Default");
    }
}

function PlayFishesAnimation() {
    var num;
    for (var i = 5; i < 84; i++) {
        if (i < 10)
            num = "00" + i;
        else
            num = "0" + i;
        AR.play("Point" + num + "#Default",0);
    }
}


function OnClickFish(_nodeId){
    if(_nodeId==null)return;   
    if(_nodeId.indexOf("1")>-1){
        //TODO: 未中奖
        var tmp_Index =Math.abs(Math.floor(Math.random()*10)%4);
        AR.set_texture("UI1_wenzi","bundle/tips/tishi"+tmp_Index+".png");
        AR.set_visible("UI1_wenzi",true);
    }else if(_nodeId.indexOf("Fish")>-1){
        //TODO:中奖
        AR.set_visible("Group_UI2",true);

    }
}



