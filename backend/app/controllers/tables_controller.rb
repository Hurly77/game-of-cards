class TablesController < ApplicationController
  def index
    table = Table.all
    render json: TableSerializer.new(table)
  end

  def show
    table = Table.find_by(id: params[:table_id])
    render json: TableSerializer.new(table)
  end
end
