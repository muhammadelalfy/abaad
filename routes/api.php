<?php


use App\Http\Controllers\Api\V1\FileController;

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('changeLocale/{locale}', function ($locale) {
    \Illuminate\Support\Facades\App::setLocale($locale);
    return \Illuminate\Support\Facades\App::getLocale();
});

Route::get('url', function (){
    return response()->json(['url' => 'https://dispatcher.phzdispatch.com/']);
});

//authentication
Route::post('login', LoginController::class);

Route::post('change-password', [ResetPasswordController::class,'changePassword'])->name('changePassword');
Route::post('reset-password', [ResetPasswordController::class,'sendLink'])->name('changePassword');

Route::resource('files', FileController::class)->only(['store', 'destroy']);

//apis for dynamics
//Route::group(['prefix'=>'dynamics','middleware'=>'dynamics.auth'], function(){
//    //put orders in our database
//    Route::post('orders', [DynamicsOrderController::class, 'store']);
//    //update invoice status
//    Route::post('orders/invoice/status', [DynamicsOrderController::class, 'updateInvoiceStatus']);
//});

Route::middleware('auth:sanctum')->group(function(){

    Route::post('logout', LogoutController::class);

    Route::resource('roles', RoleController::class)->except('edit', 'create');
    Route::get('permissions', PermissionController::class);
    Route::get('roles/{id?}/change-status', [RoleController::class,'toggle']);

    //**************************** Settings *****************************************//

//    Route::controller(OrderController::class)->group(function () {
//        Route::group(['prefix' => 'orders'], function(){
//            Route::get('/', 'index');
//            Route::group(['prefix' => '/{id}'], function(){
//                Route::post('assign',  'assign');
//                Route::post('note', 'addNote');
//                Route::post('check-on-hand-items', 'checkItemsOnHand');
//                Route::post('manual-sync-to-dynamics', 'manualSyncToDynamics');
//                Route::group(['prefix' => '/status'], function(){
//                    Route::post('cancel', 'cancelOrder');
//                    Route::post('reassign', 'reassignOrder');
//                });
//            });
//        });
//    });

//    Route::controller(OrderStatusController::class)->group(function () {
//        Route::group(['prefix' => 'orders/statuses'], function () {
//            Route::get('/statistics', 'getStatistics');
//            Route::get('/', 'getStatuses');
//        });
//    });

//    Route::controller(ItemController::class)->group(function () {
//        Route::group(['prefix' => 'items'], function(){
//            Route::get('', 'index');
//        });
//    });

    Route::group(['prefix' => 'export-excel'], function(){
        Route::controller(ReportExportController::class)->group(function (){
            Route::group(['prefix' => 'reports'], function(){
                Route::get('delivery-time', 'deliveryTimeExport');
                Route::get('driver-order-count', 'driverOrderCountExport');
                Route::get('orders-delivery-duration', 'OrdersDeliveryDurationExport');
                Route::get('sales-orders', 'salesOrdersExport');
                Route::get('customer-orders', 'customerOrdersExport');
                Route::get('drivers', 'driversExport');
            });
        });
    });

});
