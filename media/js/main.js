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
        'ADVANCED_KNAPSACK_PROBLEM': function () { vscode.postMessage({ type: 'ADVANCED_KNAPSACK_PROBLEM' }); },
        'HAMILTON_PATH': function () { vscode.postMessage({ type: 'HAMILTON_PATH' }); },
        'KNAPSACK_PROBLEM': function () { vscode.postMessage({ type: 'KNAPSACK_PROBLEM' }); },
        'MINIMUM_SPANNING_TREE': function () { vscode.postMessage({ type: 'MINIMUM_SPANNING_TREE' }); },
        'N_COLORABILITY': function () { vscode.postMessage({ type: 'N_COLORABILITY' }); },
        'SEATING': function () { vscode.postMessage({ type: 'SEATING' }); },
        'STRATEGIC_COMPANIES': function () { vscode.postMessage({ type: 'STRATEGIC_COMPANIES' }); },
        'VERTEX_COVER': function () { vscode.postMessage({ type: 'VERTEX_COVER' }); },

        // javascript
        'jsIF': function () { vscode.postMessage({ type: 'jsIF' }); }
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
