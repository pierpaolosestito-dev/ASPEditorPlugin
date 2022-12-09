//@ts-check

(function () {
    const vscode = acquireVsCodeApi();

    window.addEventListener('message', event => {
        const v = event.data.command;
        
        selectPanel(v);
        showPanel(v);
    });

    function init() {
        vscode.postMessage({type: 'showPanel'});
    }

    function selectPanel(v) {
        document.querySelectorAll('.changeCodePanel option').forEach(elm => {
            elm.removeAttribute("selected");
        });
        if(v === 'dlv') document.querySelector('.changeCodePanel').querySelector("option[value='dlv']").setAttribute("selected", "selected");
        else if(v === 'js') document.querySelector('.changeCodePanel').querySelector("option[value='js']").setAttribute("selected", "selected");
    }

    function showPanel(v) {
        document.querySelectorAll('.panel').forEach(function(elm) {
            elm.style.display = 'none';
        });
        if(v === 'dlv') document.querySelector('.panel-dlv').style.display = 'block';
        else if(v === 'js') document.querySelector('.panel-js').style.display = 'block';
    }

    var FunctionList = {
        // DLV
        'example': function () { vscode.postMessage({ type: 'example' }); },

        // javascript
        'jsIF': function () { vscode.postMessage({ type: 'jsIF' }); },
        'jsSwitch': function () { vscode.postMessage({ type: 'jsSwitch' }); },
        'jsFor': function () { vscode.postMessage({ type: 'jsFor' }); },
        'jsWhile': function () { vscode.postMessage({ type: 'jsWhile' }); },
        'jsDoWhile': function () { vscode.postMessage({ type: 'jsDoWhile' }); },
        'jsFunction': function () { vscode.postMessage({ type: 'jsFunction' }); },
        'jsAsyncFunction': function () { vscode.postMessage({ type: 'jsAsyncFunction' }); },
        'jsClass': function () { vscode.postMessage({ type: 'jsClass' }); },
        'jsGet': function () { vscode.postMessage({ type: 'jsGet' }); },
        'jsPost': function () { vscode.postMessage({ type: 'jsPost' }); },
        'jsJson': function () { vscode.postMessage({ type: 'jsJson' }); },
        'jsTry': function () { vscode.postMessage({ type: 'jsTry' }); },
        'jsHello': function () { vscode.postMessage({ type: 'jsHello' }); },
    };

    document.querySelector('.changeCodePanel').addEventListener('change', (event) => {
        showPanel(event.target.value);
        switch (event.target.value) {
            case 'dlv':
                break;
            case 'js':
                break;
        }
    }, false);

    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', (event) => {
            if (typeof FunctionList[btn.dataset.act] === 'function') FunctionList[btn.dataset.act]();
        }, false);
    });

    init();
}());
