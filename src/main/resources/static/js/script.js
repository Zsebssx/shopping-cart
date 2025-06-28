$(function(){

// Validación de registro de usuario

var $userRegister = $("#userRegister");

$userRegister.validate({
    rules: {
        name: {
            required: true,
            lettersonly: true
        },
        email: {
            required: true,
            space: true,
            email: true
        },
        mobileNumber: {
            required: true,
            space: true,
            numericOnly: true,
            minlength: 10,
            maxlength: 12
        },
        password: {
            required: true,
            space: true
        },
        confirmpassword: {
            required: true,
            space: true,
            equalTo: '#pass'
        },
        address: {
            required: true,
            all: true
        },
        city: {
            required: true,
            space: true
        },
        state: {
            required: true
        },
        pincode: {
            required: true,
            space: true,
            numericOnly: true
        },
        img: {
            required: true
        }
    },
    messages: {
        name: {
            required: 'El nombre es obligatorio',
            lettersonly: 'Nombre inválido'
        },
        email: {
            required: 'El correo es obligatorio',
            space: 'No se permiten espacios',
            email: 'Correo inválido'
        },
        mobileNumber: {
            required: 'El número de celular es obligatorio',
            space: 'No se permiten espacios',
            numericOnly: 'Número inválido',
            minlength: 'Mínimo 10 dígitos',
            maxlength: 'Máximo 12 dígitos'
        },
        password: {
            required: 'La contraseña es obligatoria',
            space: 'No se permiten espacios'
        },
        confirmpassword: {
            required: 'La confirmación de contraseña es obligatoria',
            space: 'No se permiten espacios',
            equalTo: 'Las contraseñas no coinciden'
        },
        address: {
            required: 'La dirección es obligatoria',
            all: 'Dirección inválida'
        },
        city: {
            required: 'La ciudad es obligatoria',
            space: 'No se permiten espacios'
        },
        state: {
            required: 'El estado es obligatorio'
        },
        pincode: {
            required: 'El código postal es obligatorio',
            space: 'No se permiten espacios',
            numericOnly: 'Código postal inválido'
        },
        img: {
            required: 'La imagen es obligatoria'
        }
    }
});

// Validación de pedidos

var $orders = $("#orders");

$orders.validate({
    rules: {
        firstName: {
            required: true,
            lettersonly: true
        },
        lastName: {
            required: true,
            lettersonly: true
        },
        email: {
            required: true,
            space: true,
            email: true
        },
        mobileNo: {
            required: true,
            space: true,
            numericOnly: true,
            minlength: 10,
            maxlength: 12
        },
        address: {
            required: true,
            all: true
        },
        city: {
            required: true,
            all: true
        },
        state: {
            required: true,
            all: true
        },
        pincode: {
            required: true,
            space: true,
            numericOnly: true
        },
        paymentType: {
            required: true
        }
    },
    messages: {
        firstName: {
            required: 'El nombre es obligatorio',
            lettersonly: 'Nombre inválido'
        },
        lastName: {
            required: 'El apellido es obligatorio',
            lettersonly: 'Apellido inválido'
        },
        email: {
            required: 'El correo es obligatorio',
            space: 'No se permiten espacios',
            email: 'Correo inválido'
        },
        mobileNo: {
            required: 'El número de celular es obligatorio',
            space: 'No se permiten espacios',
            numericOnly: 'Número inválido',
            minlength: 'Mínimo 10 dígitos',
            maxlength: 'Máximo 12 dígitos'
        },
        address: {
            required: 'La dirección es obligatoria',
            all: 'Dirección inválida'
        },
        city: {
            required: 'La ciudad es obligatoria',
            all: 'Ciudad inválida'
        },
        state: {
            required: 'El estado es obligatorio',
            all: 'Estado inválido'
        },
        pincode: {
            required: 'El código postal es obligatorio',
            space: 'No se permiten espacios',
            numericOnly: 'Código postal inválido'
        },
        paymentType: {
            required: 'Seleccione el tipo de pago'
        }
    }
});

// Validación de restablecimiento de contraseña

var $resetPassword = $("#resetPassword");

$resetPassword.validate({
    rules: {
        password: {
            required: true,
            space: true
        },
        confirmPassword: {
            required: true,
            space: true,
            equalTo: '#pass'
        }
    },
    messages: {
        password: {
            required: 'La contraseña es obligatoria',
            space: 'No se permiten espacios'
        },
        confirmPassword: {
            required: 'La confirmación de contraseña es obligatoria',
            space: 'No se permiten espacios',
            equalTo: 'Las contraseñas no coinciden'
        }
    }
});

});

// Métodos de validación personalizados 

jQuery.validator.addMethod('lettersonly', function(value, element) {
    return /^[^-\s][a-zA-Z_\s-]+$/.test(value);
});

jQuery.validator.addMethod('space', function(value, element) {
    return /^[^-\s]+$/.test(value);
});

jQuery.validator.addMethod('all', function(value, element) {
    return /^[^-\s][a-zA-Z0-9_,.\s-]+$/.test(value);
});

jQuery.validator.addMethod('numericOnly', function(value, element) {
    return /^[0-9]+$/.test(value);
});
