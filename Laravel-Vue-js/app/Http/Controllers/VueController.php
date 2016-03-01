<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;

class VueController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = json_encode(self::getData());
        $handle = json_encode(self::getHandle());
        $columns = json_encode(self::getColumns());

        return view('vue.index', compact('columns', 'data', 'handle'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     *
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int                      $id
     *
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public static function getHandle()
    {
        return [
            ['class' => 'btn btn-primary', 'title' => '修改', 'url' => '#success'],
            ['class' => 'btn btn-danger', 'title' => '删除', 'url' => '#danger'],
        ];
    }

    public static function getColumns()
    {
        return [
            'num'         => '数量',
            'unit'        => '单位',
            'name'        => '商品名称',
            'price'       => '单价',
            'category'    => '商品分类',
            'supplier'    => '供货商',
            'create_time' => '采购日期',
        ];
    }

    public static function getData()
    {
        return [
            [
                'num'         => '10',
                'unit'        => '箱',
                'name'        => '蒙牛牛奶',
                'price'       => '100',
                'category'    => '牛奶',
                'supplier'    => '伊利总代理',
                'create_time' => '2016-02-29'
            ],
            [
                'num'         => '20',
                'unit'        => '斤',
                'name'        => '天庭蟠桃',
                'price'       => '100',
                'category'    => '水果',
                'supplier'    => '广州进口水果总代理',
                'create_time' => '2016-02-29'
            ],
            [
                'num'         => '55',
                'unit'        => '箱',
                'name'        => '北京油桃',
                'price'       => '100',
                'category'    => '水果',
                'supplier'    => '北京总代理',
                'create_time' => '2016-02-29'
            ],
            [
                'num'         => '22',
                'unit'        => '箱',
                'name'        => '泰国龙眼',
                'price'       => '100',
                'category'    => '水果',
                'supplier'    => '越南总代理',
                'create_time' => '2016-02-29'
            ],
            [
                'num'         => '33',
                'unit'        => '箱',
                'name'        => '泰国椰青',
                'price'       => '100',
                'category'    => '水果',
                'supplier'    => '泰国总代理',
                'create_time' => '2016-02-29'
            ],
        ];
    }
}
