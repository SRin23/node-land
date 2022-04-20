var members = ['egoing', 'k8805', 'hoya'];
console.log(members[1]); //'k8805'

var i = 0;
while(i<members.length){
    console.log("arrayloop", i, " : ",members[i]);
    i+=1;
}

var roles = {
    'programmer' : 'egoing',
    'designer' : 'k8805',
    'manager' : 'hoya'
}

console.log(roles.designer); //'k8805'

for(var job in roles){
    console.log('object => ', job, ' value => ', roles[job]);
}