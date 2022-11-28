

function main(callBackFun){
    console.log('main function executed')
    callBackFun()
}

function runAfterMain(){
    console.log('run After main')
}

main(runAfterMain)


